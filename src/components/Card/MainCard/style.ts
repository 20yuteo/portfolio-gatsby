import styled from 'styled-components';

const MainColor = styled.div`
    position: relative;
    border-radius: 16px;
    border: 4px solid #000;
    background: #FFF;

    /* Inner Shadow/Soft */
    box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.25) inset;
    z-index: 200;
    overflow: hidden;
`;

const MainColorContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 60px;
    font-weight: 700;
    text-align: center;
    font-size: 24px;
    align-items: center;
    gap: 8px;
`;

const Vector = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 100;
`;

const Ellipse = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    object-fit: contain;
    z-index: 100;
`;

export default {
    MainColor,
    MainColorContent,
    Vector,
    Ellipse
}