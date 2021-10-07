import { defineProperties } from "@vanilla-extract/sprinkles";

export const positioningProperties = defineProperties({
    properties: {
        position: ["fixed", "absolute", "relative"],
    },
});
