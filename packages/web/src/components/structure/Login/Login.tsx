import { useEffect, useState } from "react";
import { DesktopLoginContainer } from "./Login.css";

export function Login() {
    const [mobileViewShown, setMobileViewShown] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            const isDesktopSize = window.screen.width >= 700;

            if (isDesktopSize && mobileViewShown) setMobileViewShown(false);
            else if (!isDesktopSize && !mobileViewShown)
                setMobileViewShown(true);
        };

        checkSize();

        window.addEventListener("resize", checkSize);

        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, [mobileViewShown]);

    return <div className={DesktopLoginContainer}></div>;
}
