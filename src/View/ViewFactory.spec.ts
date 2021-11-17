import "reflect-metadata";
import {container} from "tsyringe";
import {ViewFactory} from "./ViewFactory";
import {VisitsView} from "./VisitsView";
import {UniqueVisitsView} from "./UniqueVisitsView";

describe("ViewFactory", () => {

    const viewFactory = container.resolve(ViewFactory);

    describe("when asked to instantiate a view", () => {

        it("should instantiate the right view", () => {

            const visitsView = viewFactory.createViewFor("visits");
            const uniqueVisitsView = viewFactory.createViewFor("unique");

            expect(visitsView).toBeInstanceOf(VisitsView);
            expect(uniqueVisitsView).toBeInstanceOf(UniqueVisitsView);
        });

    });

});
