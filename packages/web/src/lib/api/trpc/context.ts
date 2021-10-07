import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "../db";
import { inferAsyncReturnType, router } from "@trpc/server";

export async function createContext(_ctx: CreateNextContextOptions) {
    return { prisma };
}

export type ContextType = inferAsyncReturnType<typeof createContext>;

export const createRouter = () => router<ContextType>();
