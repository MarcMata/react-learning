//import my rows columns and containers
import React from "react";
import {Row, Column} from "../../Components/Layout/";

function Login() {
    return (
        //create login page
        <Row>
            <Column>
                    <h1>Login</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <button type="submit">Login</button>
            </Column>
        </Row>


    );
}

export default Login;