import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Login } from "../../components/structure/Login/Login";
import { NextSeo } from "next-seo";

export default function LoginPage() {
    const [session, loading] = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session && !loading) router.push("/");
    }, [session, loading, router]);

    return (
        <>
            <NextSeo title="Login" />
            <Login />
        </>
    );
}
