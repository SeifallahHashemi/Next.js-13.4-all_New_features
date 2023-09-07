import {delay} from "../../../../utils/utils";

export async function GET(){
    await delay(5000);
    return new Response("OK")
}