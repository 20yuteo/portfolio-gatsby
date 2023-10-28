const ColorList = {
    "Primary": "#DCFD00",
    "Accent03": "#A4E8FF"
}

type ColorKeyList = keyof typeof ColorList;

export const acceptColor = (color: ColorKeyList) => {
    return ColorList[color];
}
