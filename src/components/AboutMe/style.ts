import styled from 'styled-components';

const Section = styled.section`
    padding: 80px 0;
    background-color: #FFF;
    width: 100%;
`;

const Title = styled.h2`
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
`;

const Body = styled.div`
    max-width: 762px;
    margin: 0 auto;
`;

const ImgContainer = styled.div`
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 64px;
    margin: 16px auto;
    background-color: #DCFD00;
    border: 4px solid var(--text-subtitle, #000);
    overflow: hidden;
`;

const Img = styled.img`
    width: 120px;
    height: auto;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const ContentItem = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 16px;
    border: 4px solid #000;
    background: #A4E8FF;
    box-shadow: 0px -12px 1px 0px rgba(0, 0, 0, 0.25) inset;

    width: 327px;
    height: 180px;
    padding: 12px;
    gap: 10px;
`;

const ItemTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
`;

const ItemList = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 0;
`;

export default {
    Section,
    Title,
    Body,
    ImgContainer,
    Img,
    Content,
    ContentItem,
    ItemTitle,
    ItemList,
    ListItem
};