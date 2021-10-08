import { defineProperties } from "@vanilla-extract/sprinkles";

export const animationProperties = defineProperties({
    properties: {
        // https://tailwindcss.com/docs/transition-property
        transition: {
            none: "none",
            all: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            normal: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            colours:
                "background-color, border-color, color, fill, stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            shadow: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            transform: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        },
        transitionDuration: {
            75: "75ms !important",
            100: "100ms !important",
            150: "150ms !important",
            200: "200ms !important",
            300: "300ms !important",
            500: "500ms !important",
            700: "700ms !important",
            1000: "1000ms !important",
        },
    },
});
