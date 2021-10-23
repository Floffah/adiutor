import { useEffect, useState } from "react";
import { LoginBoxShadow } from "./Login.css";
import DiscordLogoWhite from "/public/images/Discord-Logo-White.svg";
import Image from "next/image";
import { signIn } from "next-auth/client";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import { c } from "../../../lib/util/props";
import libraryStockImage from "/public/images/zaini-izzuddin-55btQzyDiO8-unsplash.jpg";

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
                <div className="fixed top-0 right-0 pt-2 pr-2">
                    <Icon
                        path={mdiLoading}
                        size={mobileViewShown ? 2 : 1.5}
                        className="animate-spin text-gray-100"
                    />
                </div>
            )}
        </>
    );
    const loginStuff = (
        <>
            <h1 className="mb-2.5 text-center w-fit m-auto text-xl">
                Login to Aduitor
            </h1>
            <div
                className="rounded-lg w-fit h-fit select-none m-auto cursor-pointer pt-2.5 pl-7 pr-7"
                style={{ backgroundColor: "#5865F2" }}
            >
                <div
                    className="m-0"
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
                        className="m-0 inline-block"
                    />
                    &nbsp;&nbsp;
                    <p className="align-top text-gray-100 m-0 inline-block mt-0.5">
                        Continue with Discord
                    </p>
                </div>
            </div>
        </>
    );

    const imageoverlay = "0,0,0"; // will change for light and dark theme

    return (
        <div
            className={c(
                "bg-gray-800 overflow-auto",
                LoginBoxShadow,
                mobileViewShown
                    ? "w-full h-full"
                    : "w-11/12 h-11/12 absolute translate-center top-1/2 left-1/2 rounded-xl",
            )}
        >
            {!mobileViewShown && (
                <div
                    className="h-full w-5/12 overflow-auto bg-center bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(rgba(${imageoverlay}, 0.5), rgba(${imageoverlay}, 0.5)), url(${libraryStockImage.src})`,
                    }}
                >
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="relative m-auto text-center h-fit text-3xl text-gray-200">
                            Ready to join an advanced community of learners?
                        </h1>
                    </div>
                </div>
            )}
            {mobileViewShown ? (
                <>
                    {loadingBox}
                    <div className="w-fit h-fit top-1/2 left-1/2 absolute overflow-auto translate-center">
                        {loginStuff}
                    </div>
                </>
            ) : (
                <div className="w-7/12 h-full right-0 top-0 absolute overflow-auto">
                    {loadingBox}
                    <div className="translate-center absolute top-1/2 left-1/2 w-fit">
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
