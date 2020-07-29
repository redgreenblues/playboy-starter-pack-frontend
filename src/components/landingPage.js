import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput,
        MDBCol,MDBCard, MDBCardBody,
        MDBCardTitle, MDBCardText } 
from 'mdbreact';

export class landingPage extends Component {
    constructor(props) {
        super(props)
    }


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
                                    <MDBBtn type='submit'>sign in</MDBBtn>
     
                                    <MDBCardText className='my-2'>Or</MDBCardText>
                                    <MDBBtn href='/signup'>sign up</MDBBtn>

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
