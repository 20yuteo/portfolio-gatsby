const ColorList = {
    "Primary": "#DCFD00",
    "Accent01": "#FFE7AE",
    "Accent02": "#FFADDE",
    "Accent03": "#A4E8FF",
    "Accent04": "#FFE7AE",
    "Surface": "#FFF"
}

export type ColorKeyList = keyof typeof ColorList;

export const acceptColor = (color: ColorKeyList) => {
    return ColorList[color];
}
