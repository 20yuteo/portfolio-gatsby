import styled from 'styled-components';
import { ColorKeyList, acceptColor } from '../../const/Color';

const Button = styled.button<{color: ColorKeyList}>`
    display: inline-flex;
    height: 32px;
    padding: 0px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 4px solid #000;
    background: ${(props) => acceptColor(props.color)};

    box-shadow: -2px -4px 0px 0px rgba(0, 0, 0, 0.25) inset;
    max-width: 160px;
`;

export default {
    Button
}