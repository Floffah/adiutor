import { useEffect, useState } from "react";
import {
    DesktopLeftContainer,
    DesktopLeftContainerFlexbox,
    DesktopLeftContainerTagline,
    DesktopLoginContainer,
    DesktopRightContainer,
    DesktopRightContainerButtonContainer,
    DiscordButtonContainer,
    DiscordButtonText,
    DiscordButtonTextContainer,
    DiscordImageContainer,
    LoginHeader,
    LoginLoadingBox,
    LoginLoadingEmoji,
    MobileLoginContainer,
    MobileLoginContentContainer,
} from "./Login.css";
import DiscordLogoWhite from "/public/images/Discord-Logo-White.svg";
import Image from "next/image";
import { signIn } from "next-auth/client";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

export function Login() {
    const [mobileViewShown, setMobileViewShown] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

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

    const loadingBox = (
        <>
            {showLoading && (
                <div className={LoginLoadingBox}>
                    <Icon
                        path={mdiLoading}
                        size={mobileViewShown ? 2 : 1.5}
                        className={LoginLoadingEmoji}
                    />
                </div>
            )}
        </>
    );
    const loginStuff = (
        <>
            <h1 className={LoginHeader}>Login to Aduitor</h1>
            <div className={DiscordButtonContainer}>
                <div
                    className={DiscordButtonTextContainer}
                    onClick={() => {
                        setShowLoading(true);
                        signIn("discord");
                    }}
                >
                    <Image
                        src={DiscordLogoWhite}
                        alt="Discord icon"
                        width={26}
                        height={26}
                        className={DiscordImageContainer}
                    />
                    &nbsp;&nbsp;
                    <p className={DiscordButtonText}>Continue with Discord</p>
                </div>
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
                <>
                    {loadingBox}
                    <div className={MobileLoginContentContainer}>
                        {loginStuff}
                    </div>
                </>
            ) : (
                <div className={DesktopRightContainer}>
                    {loadingBox}
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
