import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect, Link} from "react-router-dom"
import { MDBContainer, MDBBtn, MDBInput,
    MDBCol,MDBCard, MDBCardBody,
    MDBCardTitle } 
from 'mdbreact';
import api from '../api'

class signUpPage extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            registerUsername: '',
            registerPassword: '',
            registerPassword2: '', // Confirmation password
            registerEmail: '',
            registerProfileImg: '',
            registerProfileBio:'',
            registerSuccess : false,
            islogged : false
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    redirecting = ()=> { // adding a function to redirect
        if(this.state.registerSuccess){
        return <Redirect to='/'/>
        } else return false
    }

    register = async event => {
        event.preventDefault();
        console.log('this.state is: ', this.state)
        try {
            localStorage.setItem("token", "T"); //If the user logged, the user will get a fake-token, which is used as a key to open each protected page.
            await api.post('/register', {
                username: this.state.registerUsername,
                email: this.state.registerEmail,
                password: this.state.registerPassword,
                profileImg: this.state.profileImg,
                // add a field of profile bio
            }, {
                withCredentials: true
            })
            this.setState({
                registerUsername: '',
                registerPassword: '',
                registerPassword2: '', // Confirmation password
                registerEmail: '',
                registerProfileImg: '',
                registerSuccess : true, // adding a function to redirect
                islogged : true
            })
            console.log('registered')
            await alert('Sign up successful!')
            await this.redirecting()
        } catch (err) {
            console.log(err)
        }

    }

    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/" />;
          }
        return (

           <div className='landingPage'>
           <MDBContainer>
           {this.redirecting()}
               <MDBCol style={{ maxWidth: "35rem" }}>
               <MDBCard>
                   <MDBCardTitle className='m-2'>
                       This is sign up page
                   </MDBCardTitle>
                   <MDBCardBody>
                   <form onSubmit={this.register}>
                       <MDBInput label='username' 
                                 type='text' 
                                 name='registerUsername' 
                                 value={this.state.registerUsername} 
                                 onChange={this.handleChange}
                                 required>
                        </MDBInput>
                       <MDBInput label='create password' 
                                 type='password' 
                                 name='registerPassword'
                                 value={this.state.registerPassword} 
                                 onChange={this.handleChange}
                                 required>
                        </MDBInput>
                       <MDBInput label='confirm password' 
                                 type='password' 
                                 name='registerPassword2'
                                 value={this.state.registerPassword2} 
                                 onChange={this.handleChange}
                                 required>
                        </MDBInput>
                       <MDBInput label='email' 
                                 type='email' 
                                 name='registerEmail'
                                 value={this.state.registerEmail} 
                                 onChange={this.handleChange}
                                 required>
                        </MDBInput>
                       <MDBInput label='Add a profile image' 
                                 type='url' 
                                 name='registerProfileImg'
                                 value={this.state.registerProfileImg} 
                                 onChange={this.handleChange}>
                        </MDBInput>
                       <MDBInput label='favourite quote or a sentence to describe yourself' 
                                 type='text' 
                                 name='registerProfileBio'
                                 value={this.state.registerProfileBio} 
                                 onChange={this.handleChange}>
                        </MDBInput>
                       <MDBBtn type='submit'>join the club!</MDBBtn>
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