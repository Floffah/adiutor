import { useEffect, useState } from "react";
import {
    DesktopLeftContainer,
    DesktopLeftContainerFlexbox,
    DesktopLeftContainerTagline,
    DesktopLoginContainer,
    MobileLoginContainer,
} from "./Login.css";

export function Login() {
    const [mobileViewShown, setMobileViewShown] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            const isDesktopSize = window.innerWidth >= 700;

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

    return (
        <div
            className={
                mobileViewShown ? MobileLoginContainer : DesktopLoginContainer
            }
        >
            {!mobileViewShown && (
                <div className={DesktopLeftContainer}>
                    <div className={DesktopLeftContainerFlexbox}>
                        <h1 className={DesktopLeftContainerTagline}>
                            Ready to join an advanced community of students?
                        </h1>
                    </div>
                </div>
            )}
        </div>
    );
}
