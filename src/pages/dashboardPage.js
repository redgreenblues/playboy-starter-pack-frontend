import React, { Component, Fragment } from 'react'
import NavBar from '../components/navBar'
import Features from '../components/features.js'
import { MDBNavbarBrand } from 'mdbreact'
import { Link } from 'react-router-dom';

import api from '../api';

const bannerTitleStyle = {
    marginTop: '10%',
    fontSize: '80px'
}

class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
    }

    componentDidMount = async () => {
        try {
            const response = await api.checkAuthentication();
            this.setState({
                username: response.data.username,
                authenticated: true
            })
            console.log(this.state.username)
        } catch (err) {
            console.log(err)
            this.setState({
                authenticated: false
            })
        }
    }

    render() {
        return (
            <Fragment>
                <header className='header'>
                    <MDBNavbarBrand style={bannerTitleStyle}>
                        <Link to='/' ><strong className='white-text' >PLAYBOY STARTER PACK</strong></Link>
                    </MDBNavbarBrand>
                    <NavBar />
                </header>
                <Features />
            </Fragment>
        )
    }
}

export default DashboardPage
