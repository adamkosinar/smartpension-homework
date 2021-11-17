import {ParsedLogs} from "../WebServerLog/ParsedLogs";

export interface View {
    render: (logs: ParsedLogs) => void;
}
