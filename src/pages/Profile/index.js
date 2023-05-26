import React, {useEffect, useState} from "react";
import {Container, Row, Column} from "../../Components/Layout";
import styled from "styled-components";
import {onAuthStateChanged} from "firebase/auth";
import {auth, signOut} from "../firebase-config";

function Profile() {
    const [user, setUser]= useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            return setUser(currentUser);
        });
    }, []);

    return (
        <ProfileContainer>
            <Row className="justify-center">
                <Column className="text-center">


                    <ProfilePicture src="https://picsum.photos/200/300" alt="Profile Picture" />
                    <Name>John Doe</Name>
                    <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tortor a faucibus congue.</Bio>
                    <ContactInfo>
                        <Label>Email:</Label> john.doe@example.com
                    </ContactInfo>
                    <ContactInfo>
                        <Label>Phone:</Label> +1 210-555-5555
                    </ContactInfo>
                    <ContactInfo>
                        <Label>Website:</Label> <a href="https://example.com">example.com</a>
                    </ContactInfo>
                    <ContactInfo>
                        <Label>Social Media:</Label>
                        <ul>
                            <li><a href="https://twitter.com/johndoe">Twitter</a></li>
                            <li><a href="https://linkedin.com/in/johndoe">LinkedIn</a></li>
                        </ul>
                    </ContactInfo>

                    <h4>is the user logged in? </h4>
                    <p>{user ? "Yes" : "No"}</p>

                </Column>
            </Row>
        </ProfileContainer>
    );
}

const ProfileContainer = styled(Container)`
  margin-top: 50px;
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff
`;

const Name = styled.h2`
  margin-bottom: 10px;
`;

const Bio = styled.p`
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default Profile;