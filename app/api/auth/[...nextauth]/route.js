import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers:[GoogleProvider({clientId: process.env.GOOGLE_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET})],
    // Assuming you have imported the necessary modules and defined the User model

    callbacks: {
        async session({ session }) {
        try {
            const sessionUser = await User.findOne({
            email: session.user.email,
            });
    
            if (sessionUser) {
            session.user.id = sessionUser._id.toString();
            }
    
            return session;
        } catch (error) {
            console.log(error);
            return session;
        }
        },
    
        async signIn({ profile }) {
        try {
            await connectToDB();
    
            // Check user exists
            const userExist = await User.findOne({
            email: profile.email,
            });
    
            // if no user, create a new user
            if (!userExist) {
                const username = profile.username ? profile.username.replace(/\s/g, '').toLowerCase() : '';
                console.log(username)
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture,
            });
            }
            
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
        },
    },
    
    
})

export {handler as GET, handler as POST};