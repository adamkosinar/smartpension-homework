import "reflect-metadata";
import {container} from "tsyringe";
import {VisitsView} from "./VisitsView";

describe("VisitsView", () => {

    const visitsView = container.resolve(VisitsView);

    describe("When asked to render logs by number of visits", () => {

        it("should render data correctly", () => {

            const logMock = jest.fn();

            console.log = logMock;

            visitsView.render({
                "/test": {
                    count: 10,
                    ips: ["ip1", "ip2"]
                },
                "/test2": {
                    count: 20,
                    ips: ["ip1", "ip2"]
                }
            });

            expect(logMock).toBeCalledTimes(2);
            expect(logMock.mock.calls[0][0]).toBe("/test2 20 visits");
            expect(logMock.mock.calls[1][0]).toBe("/test 10 visits");
        });
    });

});
