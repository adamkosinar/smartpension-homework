import {injectable} from "tsyringe";
import * as fs from "fs";

@injectable()
export class FileSystemProvider {

    public get(): any {
        return fs;
    }
}
