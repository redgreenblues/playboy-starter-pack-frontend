import React, { Component } from 'react'
import NavBar from '../navBar'
import { Redirect, Link } from "react-router-dom"
import Axios from 'axios';


const api = Axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/app'
})


export class NewGif extends Component {
    constructor(props) {
        super(props)
        this.state = {
            memeImg: '',
            memeCaption: '',
            addSuccess: false
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    redirecting = () => { // adding a function to redirect
        if (this.state.addSuccess) {
            this.setState({
                addSuccess : false
            })
            return <Redirect to='/memes' />
        } else return false
    }
    registerMeme = async event => {
        event.preventDefault();
        console.log('this.state is: ', this.state)
        try {
            await api.post('/meme', {
                content: this.state.memeImg,
                caption: this.state.memeCaption,
                // add a field of profile bio
            }, {
                withCredentials: true
            })
            this.setState({
                memeImg: '',
                memeCaption: '',
                addSuccess: true
            })
            console.log('registered')
            await alert('Sign up successful!')
            await this.redirecting()
        } catch (err) {
            this.setState({
                error: true
            })
        }
    }
    render() {
        return (
            <div>
                <NavBar/>
                <h1>create new gif</h1>
            </div>
        )
    }
}

export default NewGif
