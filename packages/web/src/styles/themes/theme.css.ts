import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
    colour: {
        background: null,
        text: {
            default: null,
            header: null,
        },
        modal: {
            background: null,
        },
        login: {
            imageOverlayColour: null,
        },
    },
});
