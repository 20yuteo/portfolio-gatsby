import React from "react";
import SC from "./style";

type CardProps = {
    children: React.ReactNode;
}

export const Card = ({children}: CardProps) => {
    return (
        <SC.Card>
            {children}
        </SC.Card>
    )
}