import { AppProps } from "next/app";
import { FC, useEffect } from "react";
import "../styles/app.css";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../lib/api/trpc/router";
import { Provider, useSession } from "next-auth/client";
import { appContainer } from "../styles/app.css";
import { DefaultSeo } from "next-seo";
import "/public/fonts/JetBrainsMono.css";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { themeAtom } from "../lib/state/view";

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
    const [theme] = useAtom(themeAtom);

    return (
        <Provider>
            <div className={`${appContainer} ${theme}`}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <TRPCApp {...p} />
            </div>
        </Provider>
    );
}
