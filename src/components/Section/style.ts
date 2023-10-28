import styled from 'styled-components';

const Section = styled.section<{ backgroundColor: string}>`
    padding: 80px 0;
    background-color: ${(props) => props.backgroundColor};
    width: 100%;
`;

export default {
    Section
};