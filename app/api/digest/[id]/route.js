import Digest from "@models/digest";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const digest = await Digest.findById(params.id).populate("author")
        if (!digest) return new Response("Digest Not Found", { status: 404 });

        return new Response(JSON.stringify(digest), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { digest, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing prompt by ID
        const existingDigest = await Digest.findById(params.id);

        if (!existingDigest) {
            return new Response("Digest not found", { status: 404 });
        }

        // Update the Digest with new data
        existingDigest.digest = digest;
        existingDigest.tag = tag;

        await existingDigest.save();

        return new Response("Digest updated!", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Digest", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Digest.findByIdAndRemove(params.id);

        return new Response("Digest deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting digest", { status: 500 });
    }
};