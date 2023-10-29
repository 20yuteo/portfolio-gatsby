import React from 'react';
import SC from './style';
import { Button } from '../../Button';

const MainCard = ({content}: {content: string}) => {
    return (
        <SC.MainColor>
            <SC.Vector src={'./Vector.svg'} />
            <SC.MainColorContent>
                {content}
                <Button label="Read More" color='Primary' />
            </SC.MainColorContent>
            <SC.Ellipse src={'./Ellipse.svg'} />
        </SC.MainColor>
    );
}

export default MainCard;