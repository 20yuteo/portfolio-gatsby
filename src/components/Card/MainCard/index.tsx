import React from 'react';
import SC from './style';

const MainCard = ({children}: {children: React.ReactNode}) => {
    return (
        <SC.MainColor>
            <SC.Vector src={'./Vector.svg'} />
            {children}
            <SC.Ellipse src={'./Ellipse.svg'} />
        </SC.MainColor>
    );
}

const Content = ({children}: {children: React.ReactNode}) => {
    return (
        <SC.MainColorContent>
            {children}
        </SC.MainColorContent>
    );
}

MainCard.Content = Content;

export default MainCard;