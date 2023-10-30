import styled from 'styled-components';
import { acceptColor } from '../../const/Color';

const Header = styled.header`
    padding: 48px;
    display: flex;
    justify-content: right;
`;

const Nav = styled.nav`
    display: flex;
    font-size: 24px;
    height: 48px;
    justify-content: right;
    align-items: center;

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
        position: relative;
        top: 0;
        right: 0;
        z-index: 300;
    }
`;

const HumbergerLine = styled.div<{isOpen: boolean}>`
    position: relative;
    width: 32px;
    height: 4px;
    background-color: #000;
    margin: 9px auto;
    border-radius: 2px;
    visibility: visible;
    transform: rotate(0deg);
    opacity: 1;

    transition: transform 0.4s;

    &:first-child {
        transform: ${props => props.isOpen && 'rotate(45deg)'};
        ${props => props.isOpen && `top: 12px;`}
    }
    &:nth-child(2) {
        ${props => props.isOpen && `visibility: hidden;`}
        ${props => props.isOpen && `opacity: 0;`};
    }


    &:last-child {
        transform: ${props => props.isOpen && 'rotate(135deg)'};
        ${props => props.isOpen && `top: -14px;`}
    }
`;

const HumbergerMenu = styled.div<{isOpen: boolean}>`
    display: none;
    @media screen and (max-width: 767px) {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: ${acceptColor("Primary")};
        z-index: 200;
        transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.4s;
    }
`;

const HumbergerNav = styled.nav`
    display: none;
    font-size: 24px;
    height: 48px;
    justify-content: right;
    align-items: center;

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

const HumbergerNavList = styled.ul`
    margin-top: 152px;
    list-style: none;
    font-weight: 600;
`;

const HumbergerNavListItem = styled.li`
    padding-right: 16px;
    margin-bottom: 16px;
`;

const HumbergerNavListLink = styled.a`
    color: #000;
    cursor: pointer;
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
    Humberger,
    HumbergerLine,
    HumbergerMenu,
    HumbergerNav,
    HumbergerNavList,
    HumbergerNavListItem,
    HumbergerNavListLink
};
