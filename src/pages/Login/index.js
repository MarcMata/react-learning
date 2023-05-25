
import React, {useState} from "react";
import {Row, Column} from "../../Components/Layout/";
import styled from "styled-components";

//firebase auth
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
//
// //firebase config
// const firebaseConfig = {
//
// };
//
// //initialize firebase
// const app = initializeApp(firebaseConfig);
//
// //Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth();

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    const login = async () => {

    };

    return (
        //create login page
        <Row className="justify-center align-center">

            <Column className="justify-center align-center">
                <h1>Login</h1>
                <LoginForm action="/">

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                <Row className="justify-center align-center">
                    <LoginButton type="submit">Login</LoginButton>

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

