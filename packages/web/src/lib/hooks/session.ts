import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * @deprecated
 * built in to the _app
 */
export function useValidSession() {
    const [session, loading] = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !session) router.push("/login");
    }, [session, loading, router]);

    return [session, loading];
}
