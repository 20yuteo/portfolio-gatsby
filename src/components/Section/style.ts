import styled from 'styled-components';

const Section = styled.section<{ backgroundColor: string}>`
    padding: 80px 0;
    background-color: ${(props) => props.backgroundColor};
    width: 100%;
`;

const SectionTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
`;

const SectionBody = styled.div`
    max-width: 762px;
    margin: 0 auto;
`;

export default {
    Section,
    SectionTitle,
    SectionBody
};