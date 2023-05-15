import ReactDOM from "react-dom/client";
import {Row, Column, Container} from '../Layout/'
import styled from "styled-components";
import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    const [mobileMenuState, setMobileMenuState] = useState("mobile-menu-closed");//adds a state for dropdown menu;
    const [switchState, setSwitchState] = useState("false");//adds a state for the switch component;
    const handleMobileMenuState = () => {
        let state = mobileMenuState;
        if (state === "mobile-menu-closed") {
            state = "mobile-menu-open"
        } else {
            state = "mobile-menu-closed";
        }
        setMobileMenuState(state);//Toggles the dropdown menu state
    };
    const handleSwitchState = () => {
        let state = switchState;
        if (state === "false") {
            state = "true"
        } else {
            state = "false";
        }
        setSwitchState(state);//Toggles the switch state
    }
    return (
        <Header as="header" className={mobileMenuState}>
            <MobileMenuContainer>
                <MobileMenuOverlay></MobileMenuOverlay>
                <MobileMenuWrapper>
                    {/*    Menu items go in here */}
                </MobileMenuWrapper>
            </MobileMenuContainer>
            <Row maxWidth="unset" className="grow align-center">
                {/*column 1*/}
                <Column>
                    <h2 className="logo">COMPANY LOGO</h2>
                </Column>
                {/*column 2*/}
                <Column className="align-center no-gap no-padding">
                    <Nav className="navigation-wrapper no-gap no-padding align-center">
                        <DropdownParent data-dropdown="parent" className="dropdown-parent shrink justify-center">
                            <div data-dropdown="toggle" className="dropdown-toggle grow">
                                <NavLink to="/home">Home</NavLink>
                            </div>
                        </DropdownParent>
                        <DropdownParent data-dropdown="parent" className="dropdown-parent shrink">
                            <div data-dropdown="toggle" className="dropdown-toggle grow">
                                <p>Custom Tee's</p>
                                <div data-dropdown="arrow" className="dropdown-arrow">
                                    {/*<img src="../movie-project/images/arrow.svg" className="arrow-icon" />*/}
                                </div>
                            </div>
                            <div data-dropdown="menu" className="dropdown-menu">
                                <a href="src/Components#" title="menu item"><p>MENU ITEM</p></a>
                                <a href="src/Components#" title="menu item"><p>MENU ITEM</p></a>
                                <a href="src/Components#" title="menu item"><p>MENU ITEM</p></a>
                            </div>
                        </DropdownParent>
                        <DropdownParent data-dropdown="parent" className="shrink">
                            <div data-dropdown="toggle" className="dropdown-toggle grow">
                                <p>Embroidery</p>
                            </div>
                        </DropdownParent>
                        <DropdownParent data-dropdown="parent" className="dropdown-parent shrink">
                            <DropdownToggle data-dropdown="toggle" className="grow">
                                <p>Promotional Items</p>
                            </DropdownToggle>
                            <DropdownMenu data-dropdown="menu">
                                <a href="src/Components#" title="menu item"><p>MENU ITEM</p></a>
                                <a href="src/Components#" title="menu item"><p>MENU ITEM</p></a>
                                <a href="src/Components#" title="menu item"><p>MENU ITEM</p></a>
                            </DropdownMenu>
                        </DropdownParent>
                        <DropdownParent data-dropdown="parent" className="dropdown-parent shrink">
                            <div data-dropdown="toggle" className="dropdown-toggle grow">
                                <NavLink to="/about">About</NavLink>
                            </div>
                        </DropdownParent>
                    </Nav>
                </Column>
                {/*column 3*/}
                <Column className="shrink align-right">
                    {/*HAMBURGER ICON*/}
                    <DasBurgerWrapper onClick={handleMobileMenuState}>
                        <div className="menu-line top"></div>
                        <div className="menu-line middle"></div>
                        <div className="menu-line bottom"></div>
                    </DasBurgerWrapper>
                </Column>
            </Row>
        </Header>
    );
}

const Header = styled(Container)`
  &:hover {
    background-color: grey;
    color: white;
}
`;
const Nav = styled(Row)`
  & .navigation-wrapper {
    display: flex;
    align-items: center;
    : end;
    gap: 15px;
  }
`;
const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  pointer-events: none;
  z-index: 8;

  ${Header}.mobile-menu-open & {
    pointer-events: all;
  }
`;
const MobileMenuOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: all ease .3s;

  ${Header}.mobile-menu-open & {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -500px;
  width: 400px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 20px -10px #000;
  background-color: #eee;
  transition: all ease .3s;

  ${Header}.mobile-menu-open & {
    right: 0px;
  }
`;

const DasBurgerWrapper = styled.div`
  height: 20px;
  width: 27px;
  position: relative;
  /*background-color: grey;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 9;
`;
const DropdownParent = styled(Column)`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const DropdownToggle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const DropdownMenu = styled.div`
  position: absolute;
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  top: 100%;
  right: 0;
  min-width: 200px;
  display: flex;
  flex-direction: column;

  &p {
    text-align: center;
  }

  ${DropdownParent}:hover & {
    pointer-events: all;
    opacity: 1;
  }
`;
const MenuLine = styled.div`
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all ease .3s;

  &.top {

  }

  &.middle {

  }

  &.bottom {

  }
`;

export default Navbar;