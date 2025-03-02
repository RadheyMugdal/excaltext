import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { accounts, db, sessions, users } from "./db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
  }),
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
    session: async ({ session }) => {
      return session;
    },
  },
  session: { strategy: "database" },
});
