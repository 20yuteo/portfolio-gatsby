import React from "react";
import SC from "./style";

export const Header = () => {

    const [isHumbergerOpen, setIsHumbergerOpen] = React.useState(false);

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
            <SC.Humberger onClick={() => setIsHumbergerOpen(isOpen => !isOpen)}>
                <SC.HumbergerLine isOpen={isHumbergerOpen} />
                <SC.HumbergerLine isOpen={isHumbergerOpen} />
                <SC.HumbergerLine isOpen={isHumbergerOpen} />
            </SC.Humberger>
        </SC.Header>
    )
}