import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    gap: 24px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    text-align: center;
    font-size: 24px;
    align-items: center;
    gap: 8px;
`;

export default {
    CardContainer,
    ContentWrapper
}