import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBInput,
    MDBCol,MDBCard, MDBCardBody,
    MDBCardTitle, MDBCardText } 
from 'mdbreact';
import { Link } from 'react-router-dom';


export class signUpPage extends Component {

    render() {
        return (
            <div className='landingPage'>
            <MDBContainer>
                <MDBCol style={{ maxWidth: "35rem" }}>
                <MDBCard>
                    <MDBCardTitle className='m-2'>
                        This is sign up page
                    </MDBCardTitle>
                    <MDBCardBody>
                    <form action="/app/sessions" method="POST">
                        <MDBInput label='choose a username (it will be displayed)' type='text'name='username'></MDBInput>
                        <MDBInput label='choose a password' type='password' name='password'></MDBInput>
                        <MDBInput label='re-type password again' type='password' name='rePassword'></MDBInput>
                        <MDBInput label='email' type='email' name='email'></MDBInput>
                        <MDBInput label='Select profile img (url format)' type='text' name='proImg'></MDBInput>
                        <MDBInput label='favourite quote or a sentence to describe yourself' type='text' name='proImg'></MDBInput>
                        <Link to='/'><MDBBtn>join the club!</MDBBtn></Link>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBContainer>
            </div>
        )
    }
}

export default signUpPage
