// inspired by tailwind rem increments (1/4 increment * 4)
export type MeasurementKeys = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|20|24|28|32|36|40|44|48|52|56
export type SizingKeys = "full"

export const measurementValues: Record<MeasurementKeys, string> = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    13: "3.25rem",
    14: "3.5rem",
    15: "3.75rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem"
}

export const sizingValues: Record<SizingKeys | MeasurementKeys, string> = {
    ...measurementValues,
    full: "100%"
}