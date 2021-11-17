import {FileSystemProvider} from "./FileSystemProvider";
import {injectable, singleton} from "tsyringe";

@injectable()
@singleton()
export class FileSystemProviderMock extends FileSystemProvider{

    public static mockData = "";

    public get() {

        return {
            readFileSync: () => {
                return FileSystemProviderMock.mockData;
            }
        };
    }
}
