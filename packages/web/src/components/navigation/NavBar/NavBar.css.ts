import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../styles/sprinkles/sprinkles.css";

export const NavBarContainer = sprinkles({
    width: "full",
    height: 12,
    position: "fixed",
    top: 0,
    left: 0,
});

export const NavBarImage = style([
    sprinkles({
        borderRadius: "full",
    }),
    {
        margin: "4px 0 0 10px !important",
    },
]);

export const NavBarHeader = style([
    sprinkles({
        display: "inline-block",
    }),
    {
        verticalAlign: "top",
        margin: "8px 0 0 10px",
    },
]);
