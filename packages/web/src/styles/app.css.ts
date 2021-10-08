import { globalStyle, style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles/sprinkles.css";
import { colours } from "./system/colours.css";
import { sizingValues } from "./system/sizes.css";
import { PoppinsFont } from "./system/font.css";

globalStyle("html, body", {
    // fontFamily:
    //     "Poppins,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    fontFamily: PoppinsFont,
    textRendering: "optimizeLegibility",
    imageRendering: "smooth" as "pixelated", // lmao dont ask
    colorRendering: "optimizeQuality",
    shapeRendering: "geometricPrecision",
});

globalStyle("p", {
    color: colours.gray100,
    fontSize: sizingValues[4],
    lineHeight: sizingValues[7],
});

globalStyle("h1, h2, h3, h4, h5, h6", {
    color: colours.gray200,
});

export const appContainer = style([
    sprinkles({
        backgroundColor: "gray700",
        position: "fixed",
        top: 0,
        left: 0,
        width: "full",
        height: "full",
    }),
]);
