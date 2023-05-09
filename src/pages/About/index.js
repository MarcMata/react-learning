import React from "react";
import styled from "styled-components";

function About() {
    return (
        <div>
            <Title>about us</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet beatae magni sit. Corporis esse iusto numquam optio ratione reiciendis sapiente voluptatem voluptatibus. Aliquam aperiam possimus provident, sapiente vel velit.</p>
        </div>
    )
}

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
`;

export default About;