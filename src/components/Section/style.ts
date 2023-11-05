import styled from 'styled-components';

const Section = styled.section<{ backgroundcolor: string}>`
    padding: 40px 0;
    background-color: ${(props) => props.backgroundcolor};
    width: 100%;
`;

const SectionTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
`;

const SubTitle = styled.h3`
    font-size: 24px;
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
    SubTitle,
    SectionBody
};