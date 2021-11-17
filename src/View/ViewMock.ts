import {View} from "./View";
import {singleton} from "tsyringe";

@singleton()
export class ViewMock implements View {

    public static callCount = 0;

    public render(): void {
        ViewMock.callCount += 1;
        return;
    }

}
