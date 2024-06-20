import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: "find on google cloud console",
            clientSecret: "find on google cloud console",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    secret: "jwt secret",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST};