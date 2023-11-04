import React, { useEffect } from 'react';

export const PageName = {
    Home: 'Home',
    AboutMe: 'AboutMe',
    Portfolio: 'Portfolio',
    Contact: 'Contact'
} as const;

export type PageNameKey = keyof typeof PageName;

type ScrollContextProps = {
    onClick: (name: PageNameKey) => void;
    scrollY: number;
};

export const ScrollContext = React.createContext<ScrollContextProps>({} as ScrollContextProps);

export const useScrollContext = (): ScrollContextProps => {
    const [selectedPage, setSelectedPage] = React.useState<PageNameKey>(PageName.Home);

    const onClick = (name: PageNameKey) => React.useCallback(() => {
        setSelectedPage(name);
    }, [name]);

    useEffect(() => {
        console.log("useEffect");
    }, []);

    return {
        onClick,
        scrollY: 0,
    }
};