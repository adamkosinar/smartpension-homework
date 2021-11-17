import {WebServerLog} from "./WebServerLog/WebServerLog";
import {injectable} from "tsyringe";
import {ParsedLogs} from "./WebServerLog/ParsedLogs";
import {ViewFactory} from "./View/ViewFactory";

@injectable()
export class AppController {

    private readonly parsedLogs: ParsedLogs;

    constructor(private viewFactory: ViewFactory, webServerLog: WebServerLog) {

        this.parsedLogs = webServerLog.parseLogs(process.env.FILE_PATH);
    }

    public renderLogs(viewName: string): void {

        const view = this.viewFactory.createViewFor(viewName);
        view.render(this.parsedLogs);

    }

}
