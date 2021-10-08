import { createSprinkles } from "@vanilla-extract/sprinkles";
import { colourProperties } from "./colours.css";
import { responsiveProperties } from "./responsive.css";
import { positioningProperties } from "./positioning.css";
import { sizingProperties } from "./sizing.css";

export const sprinkles = createSprinkles(
    colourProperties,
    responsiveProperties,
    positioningProperties,
    sizingProperties,
);
