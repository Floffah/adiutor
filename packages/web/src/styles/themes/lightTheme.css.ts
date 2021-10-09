import { createTheme } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import { colours } from "../system/colours.css";

export const lightThemeClass = createTheme(vars, {
    colour: {
        background: colours.gray100,
        text: {
            default: colours.gray900,
            header: colours.gray700,
        },
        modal: {
            background: colours.gray300,
        },
        login: {
            imageOverlayColour: "255, 255, 255",
        },
    },
});
