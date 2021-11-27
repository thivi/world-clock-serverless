import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const getTime: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const region = req.query.name;
    const time = new Date().toLocaleTimeString("en-US", { timeZone: region });

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: time
    };

};

export default getTime;
