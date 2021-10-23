import { RefObject } from "react";
import { useIntersection } from "react-use";
import favicon from "/public/favicon.png";
import { c } from "../../../lib/util/props";

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
            className={c(
                "w-full h-12 fixed top-0 left-0",
                p.showBackground ? "bg-gray-800" : "backdrop-blur-sm",
            )}
        >
            {/* nextjs image just doesn't fit the use case here, why do they have to wrap the image in loads of spans and divs and dont give us ways to add classnames to them without horrendous workarounds */}
            <img
                src={favicon.src}
                height={40}
                width={40}
                className="ml-2.5 mt-1 inline-block rounded-full"
            />
            <h2 className="inline-block align-top ml-2.5 mt-2 text-gray-300 text-2xl">
                Adiutor
            </h2>
        </div>
    );
}

NavBar.defaultProps = {
    showBackground: true,
};

export { NavBar };
