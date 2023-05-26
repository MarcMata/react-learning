
import React, {useState} from "react";
import {Row, Column} from "../../Components/Layout/";
import styled from "styled-components";
import {auth} from "../firebase-config";
import {NavLink} from "react-router-dom";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, ] = useState("");
    const [user, setUser] = useState({});


    const auth = getAuth();
    const login = setPersistence(auth, browserSessionPersistence)
        .then(() => {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return signInWithEmailAndPassword(
                auth,
                loginEmail, loginPassword);
        })
        .catch((e) => {
            // Handle Errors here.
            const errorCode = e.code;
            const errorMessage = e.message;
        });

    getAuth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUser(user);
            // ...
        } else {

        }
    });


    return (
        //create login page
        <Row className="justify-center align-center">

            <Column className="justify-center align-center">
                <h1>Login</h1>
                <LoginForm action="/profile">

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username"  onChange={(event) => {setLoginEmail(event.target.value)}}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" onChange={(event) => {setLoginEmail(event.target.value)}}/>
                <Row className="justify-center align-center">
                    <LoginButton type="submit" onClick={login}>Login</LoginButton>

                    <span>Don't have an account? <Link href="/register">Register now!</Link></span>

                </Row>
                </LoginForm>
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
    &:hover {
        background: #0277bd;
      
    }
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    gap: 10px;
`;


const Link = styled.a`
    color: cornflowerblue;
    display: inline-block;
    &:hover {
        color: cornflowerblue;
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default Login;

