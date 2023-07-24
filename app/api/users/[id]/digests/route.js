import Digest from "@models/digest";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const digests = await Digest.find({ author: params.id }).populate("author")

        return new Response(JSON.stringify(digests), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 