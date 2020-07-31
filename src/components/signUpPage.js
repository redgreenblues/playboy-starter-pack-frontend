import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import LandingPage from './landingPage';

const api = Axios.create({
    baseURL: 'http://localhost:3000/app',
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
            registered: false
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = async event => {
        event.preventDefault();
        try {
            const response = await api.post('/register', {
                username: this.state.registerUsername,
                email: this.state.registerEmail,
                password: this.state.registerPassword,
                profileImg: this.state.profileImg
            }, {
                withCredentials: true
            })
            console.log(response.data)
            this.setState({
                registerUsername: '',
                registerPassword: '',
                registerPassword2: '', // Confirmation password
                registerEmail: '',
                registerProfileImg: '',
                registered: true
            })
        } catch (err) {
            console.log(err.response.data)
            this.setState({
                error: true
            })
        }
    }

    render() {
        return (
                <div className='landingPage'>
                    <form onSubmit={this.register}>
                        {this.state.error ? <h1>User exists</h1> : null}
                        <label htmlFor='registerUsername'>Username:</label>
                        <input type='text' name='registerUsername' value={this.state.registerUsername} onChange={this.handleChange} required />
                        <br />
                        <label htmlFor='registerEmail'>Email:</label>
                        <input type='email' name='registerEmail' value={this.state.registerEmail} onChange={this.handleChange} required />
                        <br />
                        <label htmlFor='registerPassword'>Password:</label>
                        <input type='password' name='registerPassword' value={this.state.registerPassword} onChange={this.handleChange} required />
                        <br />
                        <label htmlFor='registerPassword2'>Confirm Password:</label>
                        <input type='password' name='registerPassword2' value={this.state.registerPassword2} onChange={this.handleChange} required />
                        <br />
                        <label htmlFor='registerProfileImg'>Add a profile image:</label>
                        <input type='url' name='registerProfileImg' value={this.state.registerProfileImg} onChange={this.handleChange} />
                        <br />
                        <input type='submit' value='Submit'></input>
                    </form>
                </div>
        )
    }
}

export default signUpPage
