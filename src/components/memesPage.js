import React, { Component, Fragment} from 'react'
import NavBar from './navBar'
import {MDBNavbarBrand} from 'mdbreact'
import {Link} from 'react-router-dom';

const bannerTitleStyle = {
    marginTop: '10%',
    fontSize : '80px'
}

export class memesPage extends Component {


    render() {
        return (
            <Fragment>
                <header className='header'>
                    <MDBNavbarBrand style={bannerTitleStyle}>
                        <Link to='/' ><strong className='white-text' >PLAYBOY STARTER PACK</strong></Link>
                    </MDBNavbarBrand>
                    <NavBar/>
                </header>
            </Fragment>
        )
    }
}

export default memesPage
