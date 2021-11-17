import {ViewFactory} from "./ViewFactory";
import {injectable} from "tsyringe";
import {View} from "./View";
import {ViewMock} from "./ViewMock";

@injectable()
export class ViewFactoryMock extends ViewFactory {

    public static callArgs = "";

    public createViewFor(viewType: string): View {

        ViewFactoryMock.callArgs = viewType;

        return new ViewMock();
    }

}
