import { AzureFunction, Context, HttpRequest } from "@azure/functions"

export default async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const json = {
        text: "hi there"
    };

    context.res = { body: json };
};