import { defineProperties } from "@vanilla-extract/sprinkles";
import { measurementValues } from "../system/sizes.css";
import { colours } from "../system/colours.css";

export const borderProperties = defineProperties({
    properties: {
        borderWidth: measurementValues,
        color: colours,
        borderRadius: {
            sm: "0.125rem",
            normal: "0.25rem",
            md: "0.375",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px",
        },
    },
});
