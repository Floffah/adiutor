import { RefObject } from "react";
import { useIntersection } from "react-use";
import favicon from "/public/favicon.png";
import { c } from "../../../lib/util/props";

export function IntersectableNavBar(p: {
    headerRef: RefObject<HTMLDivElement>;
    applyContentMargin: boolean;
}) {
    const intersection = useIntersection(p.headerRef, {});

    return (
        <NavBar
            showBackground={intersection && intersection.intersectionRatio >= 1}
            applyContentMargin={p.applyContentMargin}
        />
    );
}

function NavBar(p: {
    showBackground: boolean | null;
    applyContentMargin: boolean;
}) {
    return (
        <>
            <div
                className={c(
                    "w-full md:!w-11/12 h-12 fixed top-0 md:!top-3 left-0 md:!left-1/2 md:translate-center-x rounded-none md:!rounded-lg",
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
            {p.applyContentMargin && <div className="mb-20 w-full relative" />}
        </>
    );
}

NavBar.defaultProps = {
    showBackground: true,
    applyContentMargin: false,
};

IntersectableNavBar.defaultProps = {
    applyContentMargin: false,
};

export { NavBar };
