import { createTheme } from "@vanilla-extract/css";
import { colours } from "../system/colours.css";
import { vars } from "./theme.css";

export const darkThemeClass = createTheme(vars, {
    colour: {
        background: colours.gray700,
        text: {
            default: colours.gray100,
            header: colours.gray200,
        },
        modal: {
            background: colours.gray800,
        },
        login: {
            imageOverlayColour: "0, 0, 0",
        },
    },
});
