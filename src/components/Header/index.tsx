import React from "react";
import SC from "./style";
import { PageName, ScrollContext } from "@/hooks/useScrollContext";

export const Header = () => {

    const [isHumbergerOpen, setIsHumbergerOpen] = React.useState(false);
    const { onClick } = React.useContext(ScrollContext);

    return (
        <>
        <SC.Header>
            <SC.Nav>
                <SC.NavList>
                    {
                        Object.entries(PageName).map(([key, value]) => {
                            return (
                                <SC.NavListItem key={key}>
                                    <SC.NavListLink onClick={() => onClick(value)}>
                                        {value}
                                    </SC.NavListLink>
                                </SC.NavListItem>
                            )
                        })
                    }
                </SC.NavList>
            </SC.Nav>
            <SC.Humberger onClick={() => setIsHumbergerOpen(isOpen => !isOpen)}>
                <SC.HumbergerLine $isOpen={isHumbergerOpen} />
                <SC.HumbergerLine $isOpen={isHumbergerOpen} />
                <SC.HumbergerLine $isOpen={isHumbergerOpen} />
            </SC.Humberger>
        </SC.Header>
        <SC.HumbergerMenu $isOpen={isHumbergerOpen}>
            <SC.HumbergerNav>
                <SC.HumbergerNavList>
                    {
                        Object.entries(PageName).map(([key, value]) => {
                            return (
                                <SC.HumbergerNavListItem key={key}>
                                    <SC.HumbergerNavListLink onClick={() => onClick(value)}>
                                        {value}
                                    </SC.HumbergerNavListLink>
                                </SC.HumbergerNavListItem>
                            )
                        })
                    }
                </SC.HumbergerNavList>
            </SC.HumbergerNav>
        </SC.HumbergerMenu>
        </>
    )
}