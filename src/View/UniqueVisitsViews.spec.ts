import "reflect-metadata";
import {container} from "tsyringe";
import {UniqueVisitsView} from "./UniqueVisitsView";

describe("UniqueVisitsView", () => {

    const uniqueVisitsView = container.resolve(UniqueVisitsView);

    describe("When asked to render logs by unique number of visits", () => {

        it("should render data correctly", () => {

            const logMock = jest.fn();

            console.log = logMock;

            uniqueVisitsView.render({
                "/test": {
                    count: 10,
                    ips: ["ip1", "ip2"]
                },
                "/test2": {
                    count: 20,
                    ips: ["ip1", "ip2", "ip3"]
                }
            });

            expect(logMock).toBeCalledTimes(2);
            expect(logMock.mock.calls[0][0]).toBe("/test2 3 unique visits");
            expect(logMock.mock.calls[1][0]).toBe("/test 2 unique visits");
        });
    });

});
