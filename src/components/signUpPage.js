import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect, Link} from "react-router-dom"
import { MDBContainer, MDBBtn, MDBInput,
    MDBCol,MDBCard, MDBCardBody,
    MDBCardTitle } 
from 'mdbreact';

const api = Axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/app',
})

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
            registerSuccess : false
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
                registerSuccess : true // adding a function to redirect
            })
            console.log('registered')
            await alert('Sign up successful!')
            await this.redirecting()
        } catch (err) {
            console.log(err)
            this.setState({
                error: true
            })
        }

    }

    render() {
        return (
            
            /*
            <div className='landingPage'>
                {this.redirecting()}
                <form onSubmit={this.register}>
                    <label htmlFor='registerUsername'>Username:</label>
                    <input type='text' name='registerUsername' value={this.state.registerUsername} onChange={this.handleChange} required/>
                    <br />
                    <label htmlFor='registerEmail'>Email:</label>
                    <input type='email' name='registerEmail' value={this.state.registerEmail} onChange={this.handleChange} required/>
                    <br />
                    <label htmlFor='registerPassword'>Password:</label>
                    <input type='password' name='registerPassword' value={this.state.registerPassword} onChange={this.handleChange} required/>
                    <br />
                    <label htmlFor='registerPassword2'>Confirm Password:</label>
                    <input type='password' name='registerPassword2' value={this.state.registerPassword2} onChange={this.handleChange} required/>
                    <br />
                    <label htmlFor='registerProfileImg'>Add a profile image:</label>
                    <input type='url' name='registerProfileImg' value={this.state.registerProfileImg} onChange={this.handleChange} />
                    <br />
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
            */
           <div className='landingPage'>
           <MDBContainer>
           {this.redirecting()}
               <MDBCol style={{ maxWidth: "35rem" }}>
               <MDBCard>
                   <MDBCardTitle className='m-2'>
                       This is sign up page
                   </MDBCardTitle>
                   { this.state.error ? <h1>User exists!</h1> : null }
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
