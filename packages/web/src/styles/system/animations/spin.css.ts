import { keyframes, style } from "@vanilla-extract/css";

const spinAnimationKeyframes = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(360deg)",
    },
});

export const spinAnimation = style({
    animation: `1s linear infinite ${spinAnimationKeyframes}`,
});
