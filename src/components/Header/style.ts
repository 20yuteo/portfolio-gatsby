import styled from 'styled-components';

const Header = styled.header`
    padding: 48px 52px;
    width: 100%;
`;

const Nav = styled.nav`
    display: flex;
    font-size: 24px;
    height: 48px;
    justify-content: right;
    align-items: center;
`;

const NavList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: right;
    font-weight: 600;
`;

const NavListItem = styled.li`
    padding-right: 16px;
`;

const NavListLink = styled.a`
    color: #000;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: rgba(0, 0, 0, 0.5);
    }
`;

export default {
    Header,
    Nav,
    NavList,
    NavListItem,
    NavListLink,
};
