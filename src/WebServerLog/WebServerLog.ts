import {injectable} from "tsyringe";
import {FileSystemProvider} from "../FileSystem/FileSystemProvider";
import * as _ from "lodash";
import {ParsedLogs} from "./ParsedLogs";

@injectable()
export class WebServerLog {

    private fs;

    constructor(fileSystemProvider: FileSystemProvider) {

        this.fs = fileSystemProvider.get();
    }

    public parseLogs(path: string): ParsedLogs {

        const lines = this.fs.readFileSync(path)
            .toString()
            .split("\n");

        return _.reduce(lines, (reduced, line) => {

            line = line.split(" ");

            if (this.isEmptyLine(line)) {
                return reduced;
            }

            const pageUrl = line[0];
            const ip = line[1];

            let record = reduced[pageUrl];

            if (!record) {

                record = {
                    count: 0,
                    ips: []
                };

                reduced[pageUrl] = record;
            }

            record.count += 1;

            if (this.isUniqueIp(record, ip)) {

                record.ips.push(ip);
            }

            return reduced;

        }, {});

    }

    private isEmptyLine(line: Array<string>) {

        return line.length == 1;

    }

    private isUniqueIp(record, ip) {

        return !_.includes(record.ips, ip);
    }
}
