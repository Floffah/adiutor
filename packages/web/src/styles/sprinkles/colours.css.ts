import { defineProperties } from "@vanilla-extract/sprinkles";
import { colours } from "../system/colours.css";

export const colourProperties = defineProperties({
    conditions: {
        lightTheme: { "@media": "(prefers-color-scheme: light)" },
        darkTheme: { "@media": "(prefers-color-scheme: dark)" },
    },
    defaultCondition: "darkTheme",
    properties: {
        color: colours,
        backgroundColor: colours,
    },
});
