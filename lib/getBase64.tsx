import {getPlaiceholder} from "plaiceholder";
import fs from "node:fs/promises";

const GetBase64 = async (imageUrl: string) => {
    try {
        const file = await fs.readFile("/images/" + imageUrl);
        // const res = await fetch(imageUrl);

        // if (!res.ok) {
        //     throw new Error("failed to fetch")
        // }

        // const buffer = await res.arrayBuffer();
        // const {base64} = await getPlaiceholder(Buffer.from(buffer));

        const {base64} = await getPlaiceholder(file);

        return base64;
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.stack)
        }
    }
};
export default GetBase64;