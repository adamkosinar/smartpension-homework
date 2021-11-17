import "reflect-metadata";
import {container} from "tsyringe";
import {FileSystemProvider} from "../FileSystem/FileSystemProvider";
import {FileSystemProviderMock} from "../FileSystem/FileSystemProviderMock";
import {WebServerLog} from "./WebServerLog";

container.register<FileSystemProvider>(FileSystemProvider, { useClass: FileSystemProviderMock});

const webServerLog = container.resolve(WebServerLog);

describe("WebServerLog", () => {

    describe("When asked to parse logs", () => {

        FileSystemProviderMock.mockData =
            "/test testIp" + "\n" +
            "/test testIp" + "\n" +
            "/test2 testIp2" + "\n" +
            "/test3 testIp3" + "\n" +
            "/test3 testIp4" + "\n" +
            "/test3 testIp5" + "\n" +
            "";

        it("should count visits correctly", () => {

            const parsed = webServerLog.parseLogs("/test/path");

            expect(parsed["/test"].count).toEqual(2);
            expect(parsed["/test2"].count).toEqual(1);
            expect(parsed["/test3"].count).toEqual(3);

        });

        it("should aggregate unique ips into an array", () => {

            const parsed = webServerLog.parseLogs("/test/path");

            expect(parsed["/test"].ips.length).toEqual(1);
            expect(parsed["/test2"].ips.length).toEqual(1);
            expect(parsed["/test3"].ips.length).toEqual(3);

        });

        it("should skip empty lines", () => {

            const parsed = webServerLog.parseLogs("/test/path");

            expect(parsed[""]).toBeFalsy();
        });
    });

});
