import { defineProperties } from "@vanilla-extract/sprinkles";
import { measurementValues } from "../system/sizes.css";

export const positioningProperties = defineProperties({
    properties: {
        position: ["fixed", "absolute", "relative"],
        top: measurementValues,
        left: measurementValues,
        right: measurementValues,
        bottom: measurementValues,
        transform: {
            center: "translate(-50%, -50%)",
            "center-x": "translateX(-50%)",
            "center-y": "translateY(-50%)",
        },
        overflowY: ["auto", "hidden"],
        overflowX: ["auto", "hidden"],
        overflow: ["auto", "hidden"],
    },
});
