import React from 'react';

export enum IconType {
    Twitter,
    GitHub,
}

const icons = (name: IconType) => {
    switch (name) {
        case IconType.Twitter:
            return "./twitter.svg";
        case IconType.GitHub:
            return "./github.svg";
    }
}

type IconProps = {
    name: IconType
    size?: number
    color?: string
}

export const Icon = ({ name, ...rest }: IconProps) => {
    const iconSrc = icons(name);
    return <img src={iconSrc} {...rest} />;
}