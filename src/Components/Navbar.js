import {Row, Column, Container} from '../Components/Layout'
import styled from "styled-components";

function Navbar() {
    return (
        <Header>
            <Row maxWidth="unset" className="grow align-center">
                <Column>
                    <h2 className="logo">COMPANY LOGO</h2>
                </Column>
                <div className="column">
                    <nav className="row navigation-wrapper">
                        <div data-dropdown="parent" className="column dropdown-parent shrink">
                            <div data-dropdown="toggle" className="dropdown-toggle grow">
                                <p>Home</p>
                            </div>
                            <div data-dropdown="parent" className="column dropdown-parent shrink">
                                <div data-dropdown="toggle" className="dropdown-toggle grow">
                                    <p>Custom Tee's</p>
                                    <div data-dropdown="arrow" className="dropdown-arrow">
                                        {/*<img src="../movie-project/images/arrow.svg" className="arrow-icon" />*/}
                                    </div>
                                </div>
                                <div data-dropdown="menu" className="dropdown-menu">
                                    <a href="#" title="menu item"><p>MENU ITEM</p></a>
                                    <a href="#" title="menu item"><p>MENU ITEM</p></a>
                                    <a href="#" title="menu item"><p>MENU ITEM</p></a>
                                </div>
                            </div>
                            <div data-dropdown="parent" className="column dropdown-parent shrink">
                                <div data-dropdown="toggle" className="dropdown-toggle grow">
                                    <p>Embroidery</p>
                                </div>
                            </div>
                            <div data-dropdown="parent" className="column dropdown-parent shrink">
                                <div data-dropdown="toggle" className="dropdown-toggle grow">
                                    <p>Promotional Items</p>
                                    <div data-dropdown="arrow" className="dropdown-arrow">
                                        {/*<img src="../movie-project/images/arrow.svg" className="arrow-icon" />*/}
                                    </div>
                                </div>
                                <div data-dropdown="menu" className="dropdown-menu">
                                    <a href="#" title="menu item"><p>MENU ITEM</p></a>
                                    <a href="#" title="menu item"><p>MENU ITEM</p></a>
                                    <a href="#" title="menu item"><p>MENU ITEM</p></a>
                                </div>
                            </div>
                            <div data-dropdown="parent" className="column dropdown-parent shrink">
                                <div data-dropdown="toggle" className="dropdown-toggle grow">
                                    <p>Contact Us</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="column shrink">
                    {/*HAMBURGER ICON*/}
                    <div className="das-burger-wrapper">
                        <div className="menu-line top"></div>
                        <div className="menu-line middle"></div>
                        <div className="menu-line bottom"></div>
                    </div>
                </div>
            </Row>
        </Header>
        );
}

const Header = styled(Container)`
  &:hover {
    background-color: black;
    color: white;
  }

`

export default Navbar;