import {container, injectable} from "tsyringe";
import {View} from "./View";
import {VisitsView} from "./VisitsView";
import {UniqueVisitsView} from "./UniqueVisitsView";

@injectable()
export class ViewFactory {

    constructor() {
        container.register("visits", {useClass: VisitsView});
        container.register("unique", {useClass: UniqueVisitsView});
    }

    public createViewFor(viewType: string): View {

        return container.resolve<View>(viewType);

    }
}
