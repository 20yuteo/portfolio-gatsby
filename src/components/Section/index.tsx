import React from "react";
import SC from "./style";
import { ColorKeyList, acceptColor } from "../../const/Color";

type SectionProps = {
    backgroundcolor?: ColorKeyList
    children: React.ReactNode
}

const Section = ({backgroundcolor = "Surface", children}: SectionProps) => {
    return (
        <SC.Section backgroundcolor={acceptColor(backgroundcolor)}>
            {children}
        </SC.Section>
    )
}

const SectionTitle = ({children}: {children: React.ReactNode}) => {
    return (
        <SC.SectionTitle>
            {children}
        </SC.SectionTitle>
    )
}

const SubTitle = ({children}: {children: React.ReactNode}) => {
    return (
        <SC.SubTitle>
            {children}
        </SC.SubTitle>
    )
}

const SectionBody = ({children}: {children: React.ReactNode}) => {
    return (
        <SC.SectionBody>
            {children}
        </SC.SectionBody>
    )
}

Section.Title = SectionTitle;
Section.SubTitle = SubTitle;
Section.Body = SectionBody;

export { Section }