import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { accounts, sessions, users } from "./db/schema";
import { db } from "./db";

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
    session: async ({ session }) => {
      return session;
    },
  },
});
