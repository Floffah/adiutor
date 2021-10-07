import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles/sprinkles.css";

export const appContainer = style([
    sprinkles({ backgroundColor: "gray700", position: "fixed" }),
    {
        fontFamily:
            "Poppins,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        textRendering: "optimizeLegibility",
        imageRendering: "smooth" as "pixelated", // lmao dont ask
        colorRendering: "optimizeQuality",
        shapeRendering: "geometricPrecision",
    },
]);
