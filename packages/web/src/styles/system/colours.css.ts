import { blueGray, cyan } from "tailwindcss/colors";

export type ColourNames = "gray" | "blue";
export type AllowedIncrements =
    | 50
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;

export const baseColours: Record<
    ColourNames,
    Record<AllowedIncrements, string>
> = {
    gray: {
        ...blueGray,
    },
    blue: {
        ...cyan,
    },
};

export type ColoursObjectType = Record<
    `${ColourNames}${AllowedIncrements}`,
    string
>;

let colours: ColoursObjectType = {} as unknown as ColoursObjectType;

for (const colour of Object.keys(baseColours) as ColourNames[]) {
    const temp: Partial<ColoursObjectType> = {};

    for (const increment of Object.keys(
        baseColours[colour],
    ) as unknown as AllowedIncrements[]) {
        temp[`${colour}${increment}`] = baseColours[colour][increment];
    }

    colours = { ...colours, ...temp };
}

export { colours };
