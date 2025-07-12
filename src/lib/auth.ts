import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/authdb";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [Google, GitHub],

  callbacks: {
    async jwt({ token, user, account }) {
      const client = await clientPromise;
      const db = client.db();

      // First login — account + user exist
      if (account && user) {
        const dbAccount = await db.collection("accounts").findOne({
          provider: account.provider,
          providerAccountId: account.providerAccountId,
        });

        if (dbAccount?.userId) {
          token.id = dbAccount.userId.toString();
          console.log("✅ token.id from account:", token.id);
        } else if (user.id) {
          // fallback to user.id from adapter
          token.id = user.id;
          console.log("⚠️ Used fallback token.id from user.id:", user.id);
        } else {
          console.log("❌ No account or fallback user.id found");
        }
      }

      // Subsequent sessions
      if (!token.id && token.email) {
        const dbUser = await db.collection("users").findOne({
          email: token.email,
        });

        if (dbUser?._id) {
          token.id = dbUser._id.toString();
          console.log("✅ token.id from email lookup:", token.id);
        }
      }

      return token;
    },
  },
});
