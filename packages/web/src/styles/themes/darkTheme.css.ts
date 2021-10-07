import { createTheme } from "@vanilla-extract/css";
import { colours } from "../system/colours.css";

export const [darkThemeClass, darkThemeVars] = createTheme({
    colour: {
        background: colours.gray700,
    },
});
