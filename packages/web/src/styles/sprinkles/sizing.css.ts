import { defineProperties } from "@vanilla-extract/sprinkles";
import { sizingValues } from "../system/sizes.css";

const contentSizes = {
    ...sizingValues,
    fit: "fit-content",
};

export const sizingProperties = defineProperties({
    properties: {
        width: contentSizes,
        height: contentSizes,
    },
});
