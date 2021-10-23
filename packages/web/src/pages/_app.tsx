import { AppProps } from "next/app";
import { FC, useEffect } from "react";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../lib/api/trpc/router";
import { Provider, useSession } from "next-auth/client";
import { DefaultSeo } from "next-seo";
import "/public/fonts/JetBrainsMono.css";
import { useRouter } from "next/router";
import "../styles/styles.css";

export const allowedUnauthPages = ["/login"];

const App: FC<AppProps> = (p) => {
    const [session, loading] = useSession();
    const router = useRouter();

    useEffect(() => {
        console.log(router.pathname);
        if (
            !loading &&
            !session &&
            !allowedUnauthPages.includes(router.pathname)
        )
            router.push("/login");
    }, [session, loading, router]);

    return (
        <>
            <DefaultSeo
                titleTemplate="%s | Adiutor"
                defaultTitle="Adiutor"
                description="School tools, assistant, and community"
                openGraph={{
                    locale: "en",
                    url: "https://adiutor.floffah.dev",
                    description: "School tools, assistant, and community",
                    site_name: "Adiutor",
                }}
            />
            <p.Component {...p.pageProps} />
        </>
    );
};

const TRPCApp = withTRPC<AppRouter>({
    config: (_c) => {
        return {
            url:
                process.env.NODE_ENV === "production"
                    ? "https://adiutor.floffah.dev/api/trpc"
                    : "http://localhost:3000/api/trpc",
        };
    },
})(App);

export default function BoundariedApp(p: AppProps) {
    return (
        <Provider>
            <div className="bg-gray-700 fixed top-0 left-0 w-full h-full transition-colors">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <TRPCApp {...p} />
            </div>
        </Provider>
    );
}
