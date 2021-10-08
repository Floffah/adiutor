import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../styles/sprinkles/sprinkles.css";

export const DesktopLoginContainer = style([
    sprinkles({
        width: "11/12",
        height: "11/12",
        backgroundColor: "gray800",
        position: "absolute",
        transform: "center",
        top: "1/2",
        left: "1/2",
        borderRadius: "xl",
    }),
]);
