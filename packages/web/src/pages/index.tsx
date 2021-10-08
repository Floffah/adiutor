import { NextSeo } from "next-seo";
import { useValidSession } from "../lib/hooks/session";

export default function IndexPage() {
    useValidSession();

    return (
        <>
            <NextSeo title="Home" />
        </>
    );
}
