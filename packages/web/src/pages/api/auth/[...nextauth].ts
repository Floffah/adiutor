import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Providers from "next-auth/providers";
import { prisma } from "../../../lib/api/db";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Providers.Discord({
            clientId: process.env.DiscordClientID,
            clientSecret: process.env.DiscordClientSecret,
        }),
    ],
    callbacks: {
        async session(s, u) {
            return { ...s, user: { ...s.user, id: u.id } };
        },
    },
});
