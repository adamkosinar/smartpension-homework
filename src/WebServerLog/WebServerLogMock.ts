import {injectable, singleton} from "tsyringe";
import {WebServerLog} from "./WebServerLog";
import {ParsedLogs} from "./ParsedLogs";

@injectable()
@singleton()
export class WebServerLogMock extends  WebServerLog{

    public static callCount = 0;

    public parseLogs(): ParsedLogs {

        WebServerLogMock.callCount += 1;

        return {
            "/mock": {
                count: 0,
                ips: []
            }
        };
    }
}
