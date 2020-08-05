import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect} from "react-router-dom"
import { MDBContainer, MDBBtn, MDBInput,
    MDBCol,MDBCard, MDBCardBody,
    MDBCardTitle } 
from 'mdbreact';

const api = Axios.create({
    baseURL: 'http://localhost:3000/app',
})

class signUpPage extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            islogged : false, // islogged used to notify the component if the user has successfully logged in or not.
            loginParams: {
                registerUsername: '',
                registerPassword: '',
                registerPassword2: '', // Confirmation password
                registerEmail: '',
                registerProfileImg: '',
                registerProfileBio:'',
                registerSuccess : false,
            }
        }
    }

    handleChange = event => {
        // this.setState({
        //     [event.target.name]: event.target.value
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
         loginParams: loginParamsNew
        })
    }

    // redirecting = ()=> { // adding a function to redirect
    //     if(this.state.registerSuccess){
    //     return <Redirect to='/'/>
    //     } else return false
    // }

    login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        if (user_id === "admin" && user_password === "123") {
          localStorage.setItem("token", "T");
          this.setState({
            islogged: true
          });
        }
        event.preventDefault();
      };

    // register = async event => {
    //     event.preventDefault();
    //     console.log('this.state is: ', this.state)
    //     try {
    //         await api.post('/register', {
    //             username: this.state.registerUsername,
    //             email: this.state.registerEmail,
    //             password: this.state.registerPassword,
    //             profileImg: this.state.profileImg,
    //             // add a field of profile bio
    //         }, {
    //             withCredentials: true
    //         })
    //         this.setState({
    //             registerUsername: '',
    //             registerPassword: '',
    //             registerPassword2: '', // Confirmation password
    //             registerEmail: '',
    //             registerProfileImg: '',
    //             registerSuccess : true // adding a function to redirect
    //         })
    //         console.log('registered')
    //         await alert('Sign up successful!')
    //         await this.redirecting()
    //     } catch (err) {
    //         console.log(err)
    //     }

    // }

//     render() {
//         return (
            
//             /*
//             <div className='landingPage'>
//                 {this.redirecting()}
//                 <form onSubmit={this.register}>
//                     <label htmlFor='registerUsername'>Username:</label>
//                     <input type='text' name='registerUsername' value={this.state.registerUsername} onChange={this.handleChange} required/>
//                     <br />
//                     <label htmlFor='registerEmail'>Email:</label>
//                     <input type='email' name='registerEmail' value={this.state.registerEmail} onChange={this.handleChange} required/>
//                     <br />
//                     <label htmlFor='registerPassword'>Password:</label>
//                     <input type='password' name='registerPassword' value={this.state.registerPassword} onChange={this.handleChange} required/>
//                     <br />
//                     <label htmlFor='registerPassword2'>Confirm Password:</label>
//                     <input type='password' name='registerPassword2' value={this.state.registerPassword2} onChange={this.handleChange} required/>
//                     <br />
//                     <label htmlFor='registerProfileImg'>Add a profile image:</label>
//                     <input type='url' name='registerProfileImg' value={this.state.registerProfileImg} onChange={this.handleChange} />
//                     <br />
//                     <input type='submit' value='Submit'></input>
//                 </form>
//             </div>
//             */
//            <div className='landingPage'>
//            <MDBContainer>
//            {this.redirecting()}
//                <MDBCol style={{ maxWidth: "35rem" }}>
//                <MDBCard>
//                    <MDBCardTitle className='m-2'>
//                        This is sign up page
//                    </MDBCardTitle>
//                    <MDBCardBody>
//                    <form onSubmit={this.register}>
//                        <MDBInput label='username' 
//                                  type='text' 
//                                  name='registerUsername' 
//                                  value={this.state.registerUsername} 
//                                  onChange={this.handleChange}
//                                  required>
//                         </MDBInput>
//                        <MDBInput label='create password' 
//                                  type='password' 
//                                  name='registerPassword'
//                                  value={this.state.registerPassword} 
//                                  onChange={this.handleChange}
//                                  required>
//                         </MDBInput>
//                        <MDBInput label='confirm password' 
//                                  type='password' 
//                                  name='registerPassword2'
//                                  value={this.state.registerPassword2} 
//                                  onChange={this.handleChange}
//                                  required>
//                         </MDBInput>
//                        <MDBInput label='email' 
//                                  type='email' 
//                                  name='registerEmail'
//                                  value={this.state.registerEmail} 
//                                  onChange={this.handleChange}
//                                  required>
//                         </MDBInput>
//                        <MDBInput label='Add a profile image' 
//                                  type='url' 
//                                  name='registerProfileImg'
//                                  value={this.state.registerProfileImg} 
//                                  onChange={this.handleChange}>
//                         </MDBInput>
//                        <MDBInput label='favourite quote or a sentence to describe yourself' 
//                                  type='text' 
//                                  name='registerProfileBio'
//                                  value={this.state.registerProfileBio} 
//                                  onChange={this.handleChange}>
//                         </MDBInput>
//                        <MDBBtn type='submit'>join the club!</MDBBtn>
//                    </form>
//                    </MDBCardBody>
//                </MDBCard>
//                </MDBCol>
//            </MDBContainer>
//            </div>

//         )
//     }
// }

// export default signUpPage


render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.login} className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="user_id"
                onChange={this.handleChange}
                placeholder="Enter Username"
              />
              <input
                type="password"
                name="user_password"
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
              <input type="submit" value="Login" />
            </div>
          </div>
          <p>user_id === "admin" && user_password === "123"</p>
        </form>
      </div>
    );
  }
}
export default signUpPage;