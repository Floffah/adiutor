import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../styles/sprinkles/sprinkles.css";
import { vars } from "../../../styles/themes/theme.css";
import libraryStockImage from "/public/images/zaini-izzuddin-55btQzyDiO8-unsplash.jpg";
import { colours } from "../../../styles/system/colours.css";
import { spinAnimation } from "../../../styles/system/animations/spin.css";

// container

// common values between mobile and desktop login containers
const LoginContainerCommon = style([
    {
        backgroundColor: vars.colour.modal.background,
        boxShadow: "5px 5px 8px rgba(0,0,0,0.2)",
    },
    sprinkles({
        overflow: "auto",
        // transition: "all",
        // transitionDuration: 200,
    }),
]);

// component container for desktop
export const DesktopLoginContainer = style([
    LoginContainerCommon,
    sprinkles({
        width: "11/12",
        height: "11/12",
        position: "absolute",
        transform: "center",
        top: "1/2",
        left: "1/2",
        borderRadius: "xl",
    }),
]);

// component container for mobile
export const MobileLoginContainer = style([
    LoginContainerCommon,
    sprinkles({
        width: "full",
        height: "full",
    }),
]);

// left

const imageoverlay = vars.colour.login.imageOverlayColour;
// the container for the left-side content on desktop which also contains
// the image cover to make the text more legible
export const DesktopLeftContainer = style([
    sprinkles({
        height: "full",
        width: "5/12",
        overflow: "auto",
    }),
    {
        backgroundImage: `linear-gradient(rgba(${imageoverlay}, 0.5), rgba(${imageoverlay}, 0.5)), url(${libraryStockImage.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
]);

// the flexbox that allows the text to center properly above the image on desktop
export const DesktopLeftContainerFlexbox = style([
    sprinkles({
        width: "full",
        height: "full",
    }),
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
]);

// the actual text displayed in the left side on desktop
export const DesktopLeftContainerTagline = style([
    sprinkles({
        position: "relative",
    }),
    {
        margin: "auto",
        textAlign: "center",
        height: "fit-content",
    },
]);

// right

// the box that contains the right-side content on desktop
export const DesktopRightContainer = style([
    sprinkles({
        width: "7/12",
        height: "full",
        right: 0,
        top: 0,
        position: "absolute",
        overflow: "auto",
    }),
]);

// the header text on desktop and mobile
export const LoginHeader = style([
    { margin: "5px 0 10px 0", textAlign: "center", width: "fit" },
]);

// the container for the right-side buttons on desktop
export const DesktopRightContainerButtonContainer = style([
    sprinkles({
        transform: "center",
        position: "absolute",
        top: "1/2",
        left: "1/2",
        width: "fit",
    }),
]);

// the continue with discord button
export const DiscordButtonContainer = style([
    sprinkles({
        borderRadius: "lg",
    }),
    {
        backgroundColor: "#5865F2",
        width: "fit-content",
        height: "fit-content",
        padding: "9px 30px 0 30px",
        userSelect: "none",
        margin: "auto",
        cursor: "pointer",
    },
]);

// the text and image container inside the discord button
export const DiscordButtonTextContainer = style({
    margin: "0",
});

// the actual text inside the discord button container
export const DiscordButtonText = style({
    verticalAlign: "top",
    color: colours.gray100,
    margin: "0",
    display: "inline-block",
});

// the discord image container
export const DiscordImageContainer = style({
    margin: "0",
    display: "inline-block",
});

// export const RightContainerNoticeText = style({
//     margin: "2px 0 0 0",
//     color: `rgba(${vars.colour.text.default}, 0.5)`,
// });

// mobile content

// the container for the login content on mobile that centers everything
export const MobileLoginContentContainer = style([
    sprinkles({
        width: "fit",
        height: "fit",
        top: "1/2",
        left: "1/2",
        position: "absolute",
        overflow: "auto",
        transform: "center",
    }),
]);

// loading box

export const LoginLoadingBox = style({
    position: "fixed",
    top: 0,
    right: 0,
    padding: "8px 8px 0 0",
});

export const LoginLoadingEmoji = style([spinAnimation]);
