import { NextSeo } from "next-seo";
import { NavBar } from "../components/navigation/NavBar/NavBar";

export default function IndexPage() {
    return (
        <>
            <NextSeo title="Home" />
            <NavBar />
        </>
    );
}
