import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../styles/sprinkles/sprinkles.css";
import { vars } from "../../../styles/themes/theme.css";
import libraryStockImage from "/public/images/zaini-izzuddin-55btQzyDiO8-unsplash.jpg";

// container

const LoginContainerCommon = style([
    {
        backgroundColor: vars.colour.modal.background,
        boxShadow: "5px 5px 8px rgba(0,0,0,0.2)",
    },
    sprinkles({
        overflow: "auto",
        transition: "all",
        transitionDuration: 200,
    }),
]);

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

export const MobileLoginContainer = style([
    LoginContainerCommon,
    sprinkles({
        width: "full",
        height: "full",
    }),
]);

// left

const imageoverlay = vars.colour.login.imageOverlayColour;
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

export const DesktopRightContainerLoginHeader = style([
    { margin: "5px 0 0 5px", textAlign: "center" },
]);

export const DesktopRightContainerButtonContainer = style([
    sprinkles({
        transform: "center",
        position: "absolute",
        top: "1/2",
        left: "1/2",
    }),
]);

export const RightContainerDiscordButton = style([
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

export const RightContainerDiscordButtonTextContainer = style({
    margin: "0",
});

export const RightContainerDiscordButtonText = style({
    verticalAlign: "top",
});

// export const RightContainerNoticeText = style({
//     margin: "2px 0 0 0",
//     color: `rgba(${vars.colour.text.default}, 0.5)`,
// });
