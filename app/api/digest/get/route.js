import { connectToDB } from "@utils/database";
import Digest from "@models/digest";


export const GET = async() =>{
    try {
        await connectToDB;
        const digests = await Digest.find({}).populate('author');

        return new Response(JSON.stringify(digests), {status: 200})
    } catch (error) {
        return new Response('Digests not found', {status: 500})
    }
}