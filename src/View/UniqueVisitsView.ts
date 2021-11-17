import {injectable} from "tsyringe";
import {ParsedLogs} from "../WebServerLog/ParsedLogs";
import * as _ from "lodash";
import {View} from "./View";

@injectable()
export class UniqueVisitsView implements View {

    public render(logs: ParsedLogs): void {

        _.chain(_.keys(logs))
            .map((key) => {

                return {
                    pageUrl: key,
                    count: logs[key].ips.length
                };
            })
            .orderBy("count", "desc")
            .each((record) => {
                console.log(record.pageUrl + " " + record.count + " unique visits");
            }).value();

    }
}
