import "reflect-metadata";
import {container} from "tsyringe";
import {WebServerLog} from "./WebServerLog/WebServerLog";
import {WebServerLogMock} from "./WebServerLog/WebServerLogMock";
import {ViewFactory} from "./View/ViewFactory";
import {ViewFactoryMock} from "./View/ViewFactoryMock";
import {AppController} from "./AppController";

container.register<WebServerLog>(WebServerLog, { useClass: WebServerLogMock});
container.register<ViewFactory>(ViewFactory, { useClass: ViewFactoryMock});

describe("AppController", () => {

    const appController = container.resolve(AppController);

    it("should map arguments with the right view", () => {

        appController.renderLogs("visits");

        expect(ViewFactoryMock.callArgs).toBe("visits");

        appController.renderLogs("unique");

        expect(ViewFactoryMock.callArgs).toBe("unique");
        expect(WebServerLogMock.callCount).toBe(1);
    });
});
