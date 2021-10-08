import { createSprinkles } from "@vanilla-extract/sprinkles";
import { colourProperties } from "./colours.css";
import { responsiveProperties } from "./responsive.css";
import { positioningProperties } from "./positioning.css";
import { sizingProperties } from "./sizing.css";
import { borderProperties } from "./border.css";
import { animationProperties } from "./animation.css";

export const sprinkles = createSprinkles(
    colourProperties,
    responsiveProperties,
    positioningProperties,
    sizingProperties,
    borderProperties,
    animationProperties,
);
