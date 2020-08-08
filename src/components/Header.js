import React, { Component, Fragment } from 'react'
import { MDBNavbarBrand } from 'mdbreact'
import { Link } from 'react-router-dom';



const bannerTitleStyle = {
    marginTop: '10%',
    fontSize: '80px'
}

export class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <Fragment>
                <header className='header'>
                    <MDBNavbarBrand style={bannerTitleStyle}>
                        <Link to='/' ><strong className='white-text' >PLAYBOY STARTER PACK</strong></Link>
                    </MDBNavbarBrand>
                </header>
            </Fragment>
        )
    }
}

export default Header
