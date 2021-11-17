import "reflect-metadata";
import {container} from "tsyringe";
import * as _ from "lodash";
import * as dotenv from "dotenv";
import * as readline from  "readline";
import {AppController} from "./src/AppController";

dotenv.config();

const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rlInterface.question("Hello, please choose from two available views - visits, unique: ", (viewName: string) => {

    const allowed = ["visits", "unique"];

    viewName = viewName.trim();

    if(_.includes(allowed, viewName)) {

        const appController = container.resolve(AppController);
        appController.renderLogs(viewName);
        rlInterface.close();

    } else {

        console.log("\nUnsupported view type");
        rlInterface.close();
    }

});

rlInterface.on("close", () => {
    console.log("\nBye!");
});
