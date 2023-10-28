import React from "react";
import SC from "./style";
import { ColorKeyList, acceptColor } from "../../const/Color";

type SectionProps = {
    backgroundColor?: ColorKeyList
    children: React.ReactNode
}

export const Section = ({backgroundColor = "Surface", children}: SectionProps) => {
    return (
        <SC.Section backgroundColor={acceptColor(backgroundColor)}>
            {children}
        </SC.Section>
    )
}