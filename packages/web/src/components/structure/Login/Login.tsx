import { useEffect, useState } from "react";
import {
    DesktopLeftContainer,
    DesktopLeftContainerFlexbox,
    DesktopLeftContainerTagline,
    DesktopLoginContainer,
    DesktopRightContainer,
    DesktopRightContainerButtonContainer,
    LoginHeader,
    MobileLoginContainer,
    MobileLoginContentContainer,
    RightContainerDiscordButton,
    RightContainerDiscordButtonText,
    RightContainerDiscordButtonTextContainer,
} from "./Login.css";
import DiscordLogoWhite from "/public/images/Discord-Logo-White.svg";
import Image from "next/image";
import { signIn } from "next-auth/client";

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

    const loginStuff = (
        <>
            {" "}
            <h1 className={LoginHeader}>Login to Aduitor</h1>
            <div className={RightContainerDiscordButton}>
                <p
                    className={RightContainerDiscordButtonTextContainer}
                    onClick={() => signIn("discord")}
                >
                    <Image
                        src={DiscordLogoWhite}
                        alt="Discord icon"
                        width={26}
                        height={26}
                    />
                    &nbsp;&nbsp;
                    <span className={RightContainerDiscordButtonText}>
                        Continue with Discord
                    </span>
                </p>
            </div>
        </>
    );

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
                            Ready to join an advanced community of learners?
                        </h1>
                    </div>
                </div>
            )}
            {mobileViewShown ? (
                <div className={MobileLoginContentContainer}>{loginStuff}</div>
            ) : (
                <div className={DesktopRightContainer}>
                    <div className={DesktopRightContainerButtonContainer}>
                        {loginStuff}
                    </div>
                </div>
            )}
        </div>
    );
}

//                     {/*<p className={RightContainerNoticeText}>*/}
//                     {/*    Don&apos;t see one you like?{" "}*/}
//                     {/*    <a*/}
//                     {/*        href="https://github.com/Floffah/adiutor/pulls"*/}
//                     {/*        target="_blank"*/}
//                     {/*        rel="noreferrer"*/}
//                     {/*    >*/}
//                     {/*        Open a PR*/}
//                     {/*    </a>*/}
//                     {/*    !*/}
//                     {/*</p>*/}
