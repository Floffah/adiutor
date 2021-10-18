import { globalStyle, style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles/sprinkles.css";
import { sizingValues } from "./system/sizes.css";
import { PoppinsFont } from "./system/font.css";
import { vars } from "./themes/theme.css";

globalStyle("html, body", {
    // fontFamily:
    //     "Poppins,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    fontFamily: PoppinsFont,
    textRendering: "optimizeLegibility",
    imageRendering: "smooth" as "pixelated", // lmao dont ask
    colorRendering: "optimizeQuality",
    shapeRendering: "geometricPrecision",
});

globalStyle("p, span, svg", {
    color: vars.colour.text.default,
    fontSize: sizingValues[4],
    lineHeight: sizingValues[7],
});

globalStyle("h1, h2, h3, h4, h5, h6", {
    color: vars.colour.text.header,
});

export const appContainer = style([
    {
        backgroundColor: vars.colour.background,
    },
    sprinkles({
        position: "fixed",
        top: 0,
        left: 0,
        width: "full",
        height: "full",
        transition: "colours",
    }),
]);
