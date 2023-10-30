import React from 'react';
import SC from './style';
import { ColorKeyList } from '../../const/Color';

export const Button = ({children, color, onClick}: {children: React.ReactNode, color: ColorKeyList, onClick: () => void}) => {
    return <SC.Button color={color} onClick={onClick} >{children}</SC.Button>;
};
