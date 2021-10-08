import { defineProperties } from "@vanilla-extract/sprinkles";
import { sizingValues } from "../system/sizes.css";

export const sizingProperties = defineProperties({
    properties: {
        width: sizingValues,
        height: sizingValues
    }
})