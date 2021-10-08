import { defineProperties } from "@vanilla-extract/sprinkles";
import { measurementValues } from "../system/sizes.css";

export const positioningProperties = defineProperties({
    properties: {
        position: ["fixed", "absolute", "relative"],
        top: measurementValues,
        left: measurementValues,
        right: measurementValues,
        bottom: measurementValues
    },
});
