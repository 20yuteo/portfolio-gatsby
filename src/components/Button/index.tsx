import React from 'react';
import SC from './style';
import { ColorKeyList } from '../../const/Color';

export const Button = ({label, color, onClick}: {label: string, color: ColorKeyList, onClick: () => void}) => {
    return <SC.Button color={color} onClick={onClick} >{label}</SC.Button>;
};
