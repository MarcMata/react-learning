import {Row, Column, Container} from '../Layout/Layout'
import styled from "styled-components";


function Footer() {
    return (
        <FooterNavMenu as="footer">
            <Row maxWidth="unset" className="grow align-center">
                <Column className="shrink justify-center align-center">
                    <div>
                        <p>Home</p>
                        <p>Home</p>
                    </div>
                </Column>
                <Column className="shrink justify-center align-center">
                    <div>
                        <p>Home</p>
                        <p>Home</p>
                    </div>
                </Column>
                <Column className="shrink justify-center align-center">
                    <div>
                        <p>Home</p>
                        <p>Home</p>
                    </div>
                </Column>
            </Row>
        </FooterNavMenu>
    );
}

const FooterNavMenu = styled(Container)`
  height: 10vh;
  width: 100%;
  background-color: white;
`;
// const Nav = styled(Row)`
//   & .navigation-wrapper {
//     display: flex;
//     align-items: center;
//     justify-content: end;
//     gap: 15px;
//   }
// `;
//
// const DropdownToggle = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   gap: 10px;
// `;
// const DropdownMenu = styled.div`
//   position: absolute;
//   padding: 10px 20px;
//   background-color: #fff;
//   border: 1px solid rgba(0, 0, 0, 0.5);
//   top: 100%;
//   right: 0;
//   min-width: 200px;
//   display: flex;
//   flex-direction: column;
//
//   &p {
//     text-align: center;
//   }
//
//   ${DropdownParent}:hover & {
//     pointer-events: all;
//     opacity: 1;
//   }
// `;
// const MenuLine = styled.div`
//   height: 2px;
//   background-color: rgba(0, 0, 0, 0.5);
//   transition: all ease .3s;
//
//   &.top {
//
//   }
//
//   &.middle {
//
//   }
//
//   &.bottom {
//
//   }
// `;

export default Footer;