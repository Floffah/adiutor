import { RefObject } from "react";
import { useIntersection } from "react-use";
import { NavBarContainer, NavBarHeader, NavBarImage } from "./NavBar.css";
import { sprinkles } from "../../../styles/sprinkles/sprinkles.css";
import { style } from "@vanilla-extract/css";
import favicon from "/public/favicon.png";

export function IntersectableNavBar(p: {
    headerRef: RefObject<HTMLDivElement>;
}) {
    const intersection = useIntersection(p.headerRef, {});

    return (
        <NavBar
            showBackground={intersection && intersection.intersectionRatio >= 1}
        />
    );
}

function NavBar(p: { showBackground: boolean | null }) {
    return (
        <div
            className={[
                NavBarContainer,
                p.showBackground
                    ? sprinkles({ backgroundColor: "gray800" })
                    : style({
                          backdropFilter: "blur(4px)",
                      }),
            ].join(" ")}
        >
            {/* nextjs image just doesn't fit the use case here, why do they have to wrap the image in loads of spans and divs and dont give us ways to add classnames to them without horrendous workarounds */}
            <img
                src={favicon.src}
                height={40}
                width={40}
                className={NavBarImage}
            />
            <h2 className={NavBarHeader}>Adiutor</h2>
        </div>
    );
}

NavBar.defaultProps = {
    showBackground: true,
};

export { NavBar };
