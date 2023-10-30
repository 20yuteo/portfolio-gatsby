import React, { useEffect } from "react";
import SC from "./style";

export const Header = () => {

    const [isHumbergerOpen, setIsHumbergerOpen] = React.useState(false);

    return (
        <>
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
        <SC.HumbergerMenu isOpen={isHumbergerOpen}>
            <SC.HumbergerNav>
                <SC.HumbergerNavList>
                <SC.HumbergerNavListItem>
                    <SC.HumbergerNavListLink>
                        Home
                    </SC.HumbergerNavListLink>
                </SC.HumbergerNavListItem>
                <SC.HumbergerNavListItem>
                    <SC.HumbergerNavListLink>
                        Portfolio
                    </SC.HumbergerNavListLink>
                </SC.HumbergerNavListItem>
                <SC.HumbergerNavListItem>
                    <SC.HumbergerNavListLink>
                        About Me
                    </SC.HumbergerNavListLink>
                </SC.HumbergerNavListItem>
                <SC.HumbergerNavListItem>
                    <SC.HumbergerNavListLink>
                        Contact
                    </SC.HumbergerNavListLink>
                </SC.HumbergerNavListItem>
                </SC.HumbergerNavList>
            </SC.HumbergerNav>
        </SC.HumbergerMenu>
        </>
    )
}