import React from "react";
import SC from "./style";

export const Header = () => {
    return (
        <SC.Header>
            <SC.Nav>
                <SC.NavList>
                <SC.NavListItem>
                    <SC.NavListLink>
                        Home
                    </SC.NavListLink>
                </SC.NavListItem>
                <SC.NavListItem>
                    <SC.NavListLink>
                        Portfolio
                    </SC.NavListLink>
                </SC.NavListItem>
                <SC.NavListItem>
                    <SC.NavListLink>
                        About Me
                    </SC.NavListLink>
                </SC.NavListItem>
                <SC.NavListItem>
                    <SC.NavListLink>
                        Contact
                    </SC.NavListLink>
                </SC.NavListItem>
                </SC.NavList>
            </SC.Nav>
        </SC.Header>
    )
}