import React from "react";
import SC from "./style";

type ColorfulCardProps = {
    children: React.ReactNode;
}

export const ColorfulCard = ({children}: ColorfulCardProps) => {
    return (
        <SC.ColorfulCard>
            {children}
        </SC.ColorfulCard>
    )
}