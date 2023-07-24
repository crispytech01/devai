import { connectToDB } from "@utils/database";
import Digest from "@models/digest";

export const POST = async (req) => {
    const {userId, digest, tag} = await req.json();

    try {
        await connectToDB();
        const newDigest = new Digest({
            author: userId,
            digest,
            tag
        })

        await newDigest.save();
        return new Response(JSON.stringify(newDigest), { status:201});
    } catch (error) {
        return new Response('failed to create a new digest', { status: 500})
    }
}