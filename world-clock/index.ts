import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const sriLankanTime: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const time = new Date().toLocaleString("en-US", {timeZone: "Asia/Colombo"});
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: time
    };

};

export default sriLankanTime;
