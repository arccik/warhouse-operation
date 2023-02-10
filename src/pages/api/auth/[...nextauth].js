import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userService from "../../../services/user-service";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        // perform the logic here find user from db and check
        const user = await userService.login(email, password);
        if (user.error) throw new Error("Invalid Credentials");
        return user.data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token["id"] = user.id.toString();
      }
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: { email: token.email, id: token.id },
      };
    },
  },
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signOut
  },
};
export default NextAuth(authOptions);
