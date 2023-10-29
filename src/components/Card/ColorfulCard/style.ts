import styled from "styled-components";
import { acceptColor } from '../../../const/Color';

const ColorfulCard = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 16px;
    border: 4px solid #000;
    background: ${acceptColor("Accent03")};
    box-shadow: 0px -12px 1px 0px rgba(0, 0, 0, 0.25) inset;

    padding: 12px;
    gap: 10px;
`;

export default {
    ColorfulCard
};