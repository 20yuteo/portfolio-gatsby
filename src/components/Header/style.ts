import styled from 'styled-components';

const Header = styled.header`
    padding: 48px 0;
    width: 100%;

    @media screen and (max-width: 767px) {
        padding: 24px 0;
    }
`;

const Nav = styled.nav`
    display: flex;
    font-size: 24px;
    height: 48px;
    justify-content: right;
    align-items: center;
    padding-right: 32px;

    @media screen and (max-width: 767px) {
        display: none;
    }
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

const Humberger = styled.div`
    display: none;
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: 4px solid #000;
    border-radius: 16px;

    @media screen and (max-width: 767px) {
        display: block;
    }
`;

const HumbergerLine = styled.div<{isOpen: boolean}>`
    width: 32px;
    height: 4px;
    background-color: #000;
    margin: 8px auto;
    border-radius: 2px;
    opacity: 1;
    transition: transform 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;

    &:last-child {
        ${props => props.isOpen && `opacity: none;`};
    }
`;

export default {
    Header,
    Nav,
    NavList,
    NavListItem,
    NavListLink,
    Humberger,
    HumbergerLine
};
