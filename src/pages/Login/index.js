
import React from "react";
import {Row, Column} from "../../Components/Layout/";
import styled from "styled-components";

function Login() {
    return (
        //create login page
        <Row className="justify-center align-center">

            <Column className="justify-center align-center">
                <h1>Login</h1>
                <form action="/">

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                <Row className="justify-center">
                    <LoginButton type="submit">Login</LoginButton>

                    <p>Don't have an account? <Link href="/register">Register now!</Link></p>

                </Row>
                </form>
            </Column>
        </Row>
    );
}
//create styled component button login that has the color blue
const LoginButton = styled.button`
    color: #fff;
    background: #039be5;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease .3s;
    margin-right: 10px;
  margin-top: 10px;
    &:hover {
        background: #0277bd;
      
    }
`;


const Link = styled.a`
    color: cornflowerblue;
    display: inline-block;
    margin-top: 10px;
    &:hover {
        color: cornflowerblue;
        text-decoration: underline;
        cursor: pointer;
      
    }
`;

export default Login;

