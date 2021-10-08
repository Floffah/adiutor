import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../styles/sprinkles/sprinkles.css";
import libraryStockImage from "/public/images/zaini-izzuddin-55btQzyDiO8-unsplash.jpg";

const LoginContainerCommon = style([
    sprinkles({
        overflow: "auto",
        backgroundColor: "gray800",
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

export const DesktopLeftContainer = style([
    sprinkles({
        height: "full",
        width: "5/12",
        overflow: "auto",
    }),
    {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${libraryStockImage.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
]);

// export const DesktopLeftContainerBlur = style([
//     sprinkles({ width: "full", height: "full" }),
// ]);

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
        // transform: "center",
        // top: "1/2",
        // left: "1/2",
        // width: "full",
        // height: "full",
        color: "gray100",
    }),
    {
        margin: "auto",
        textAlign: "center",
        // mixBlendMode: "exclusion",
        height: "fit-content",
        // color: "white",
        // textShadow:
        // "-1px 1px 2px black, 1px 1px 2px black, 1px -1px 0 black, -1px -1px 0 black",
    },
]);
