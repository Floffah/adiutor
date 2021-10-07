import { defineProperties } from "@vanilla-extract/sprinkles";

export const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { "@media": "screen and (min-width: 768px)" },
        desktop: { "@media": "screen and (min-width: 1024px)" },
    },
    defaultCondition: false,
    properties: {
        display: ["none", "block", "flex", "inline", "inline-block"],
    },
});
