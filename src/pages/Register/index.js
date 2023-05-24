import React from "react";
import {Container, Row, Column} from "../../Components/Layout";
import styled from "styled-components";

function Register() {
    return (
    <Container>
        <Row className="justify-center align-center">

            <Column className="justify-center align-center">
                <h1>Register</h1>
                <RegisterForm action="/">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Confirm Password" />

                    <Row className="justify-center">
                        <RegisterButton type="submit">Register</RegisterButton>
                        <span>Already registered? <a href="/login">Login now!</a></span>

                    </Row>
                </RegisterForm>

            </Column>

        </Row>
    </Container>

    )
}
const RegisterButton = styled.button`
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

const RegisterForm = styled.form `
 all:unset;
  
`

export default Register;

