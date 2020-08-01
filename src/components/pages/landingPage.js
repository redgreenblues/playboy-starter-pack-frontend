import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBInput,
        MDBCol,MDBCard, MDBCardBody,
        MDBCardTitle, MDBCardText } 
from 'mdbreact';
import { Link } from 'react-router-dom';

export class landingPage extends Component {
    constructor(props) {
        super(props)
    }
    // call the backend to authenticate
    // if authed, redirect to dashboard page. 


    render() {
        return (
            <div className='landingPage'>
            <MDBContainer >
                <MDBCol style={{ maxWidth: "35rem" }}>
                    <form action="/app/sessions" method="POST">   
                        <MDBCard>
                            <MDBCardTitle className='m-3' style={{Width: '95%', margin: '0 auto'}}>
                                Welcome to playboy club!
                            </MDBCardTitle>
                            <MDBCardBody>
                                <MDBInput label='username' />
                                <MDBInput label='password' type='password' />
                                <div className='cardbottom'>
                                <Link to='/dashboard'><MDBBtn type='submit'>sign in</MDBBtn></Link>
                                    <MDBCardText className='my-2'>Or</MDBCardText>
                                    <Link to='/signup'><MDBBtn>sign up</MDBBtn></Link>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </form>
                </MDBCol>
            </MDBContainer>
            </div>
        )
    }
}

export default landingPage
