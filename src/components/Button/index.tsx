import React from 'react';
import SC from './style';
import { ColorKeyList } from '../../const/Color';

export const Button = ({label, color}: {label: string, color: ColorKeyList}) => {
    return <SC.Button color={color} >{label}</SC.Button>;
};
