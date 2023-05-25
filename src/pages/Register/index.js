import React from "react";
import {Container, Row, Column} from "../../Components/Layout";
import styled from "styled-components";
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase-config.js";
import { NavLink } from 'react-router-dom';


function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("")

    const [user, setUser]= useState({

    });
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
            // Redirect to the login page using NavLink
            <NavLink to="/login"></NavLink>
        } catch (e) {
            console.log(e.message);
        }
    };



    const logout = async () => {

    };

    return (
    <Container>
        <Row className="justify-center align-center">

            <Column className="justify-center align-center">
                <h1>Register</h1>
                <RegisterForm>
                    {/*<label htmlFor="username">Username</label>*/}
                    {/*<input type="text" name="username" id="username" placeholder="Username" />*/}
                    {/*<label htmlFor="first_name">First Name</label>*/}
                    {/*<input type="text" name="first_name" id="first_name" placeholder="First Name" />*/}
                    {/*<label htmlFor="last_name">Last Name</label>*/}
                    {/*<input type="text" name="last_name" id="last_name" placeholder="Last Name" />*/}
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={(event) => {setRegisterEmail(event.target.value)}} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" onChange={(event) => {setRegisterPassword(event.target.value)}} />
                    {/*<label htmlFor="password">Confirm Password</label>*/}
                    {/*<input type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Confirm Password" />*/}

                    <Row className="justify-center align-center">
                        <RegisterButton onClick={register} type="submit">Register</RegisterButton>
                        <span>Already registered? <Link href="/login">Login now!</Link></span>


                    </Row>
                </RegisterForm>

                    <h4>is the user logged in? </h4>
                    <p>{user ? "Yes" : "No"}</p>
            </Column>

        </Row>
    </Container>
    );
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

const Link = styled.a`
  color: cornflowerblue;
  display: inline-block;

  &:hover {
    color: cornflowerblue;
    text-decoration: underline;
    cursor: pointer;
  }
` ;


const RegisterForm = styled.form `
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    gap: 10px;
`

export default Register;

