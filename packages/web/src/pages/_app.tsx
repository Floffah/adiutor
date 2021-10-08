import { AppProps } from "next/app";
import { FC } from "react";
import "../styles/app.css";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../lib/api/trpc/router";
import { Provider } from "next-auth/client";
import { darkThemeClass } from "../styles/themes/darkTheme.css";
import { appContainer } from "../styles/app.css";
import { DefaultSeo } from "next-seo";

const App: FC<AppProps> = (p) => {
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
            <div className={`${appContainer} ${darkThemeClass}`}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <TRPCApp {...p} />
            </div>
        </Provider>
    );
}
