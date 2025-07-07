import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    GitHub,
  ],
   callbacks: {
    async session({ session, user, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
})