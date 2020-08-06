import React, { Component } from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCardTitle
} from "mdbreact";
import { Redirect, Link } from 'react-router-dom';
import api from '../api';

export class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      username: '',
      profileImg: ''
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount = async () => {
    try {
      const response = await api.getUser();
      this.setState({
        username: response.data.username,
        profileImg: response.data.profileImg,
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

  // redirecting = () => {
  //   if (this.state.loggedOut) return <Redirect to='/' />
  //   else return false
  // }

  logOut = async () => {
    try {
      const response = await api.logOut();
      console.log(response)
      // this.setState({
      //   loggedOut: true
      // })
      // await this.redirecting();
      window.location.href = '/'
    } catch (err) {
      console.log(err)
    }
  }
  navBarStyle = () => {
    return {
      display : 'flex',
      minWidth: '70%',
      flexFlow: 'row wrap',
      margin :'0 auto'

    }
  }

  render() {
    return (
      <MDBNavbar color="rgba-black-strong" dark expand="md">
        <div style={this.navBarStyle()}>
        <MDBNavbarBrand>
          <Link to='/'><strong className="white-text">Playboy Starter Pack</strong></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>

            <MDBNavItem>
              <MDBNavLink to='/dashboard'>Home</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/memes">Memes</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/gifs">Gifs</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/puns">Puns</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem className="white-text d-flex align-items-center ml-3">
              <strong>{this.state.username}</strong>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  {/* <MDBCardTitle className='m-2 border-bottom text-center'>Create Content</MDBCardTitle> */}
                  <MDBDropdownItem ><Link to ='/profile'><MDBIcon far icon="user-circle" className="mr-2" />Profile</Link></MDBDropdownItem>
                  <MDBDropdownItem ><Link to ='/new/meme'><MDBIcon icon="plus-circle" className="mr-2" />Create Memes</Link></MDBDropdownItem>
                  <MDBDropdownItem ><Link to ='/new/gif'><MDBIcon icon="plus-circle" className="mr-2" />Create Gifs</Link></MDBDropdownItem>
                  <MDBDropdownItem ><Link to ='/new/pun'><MDBIcon icon="plus-circle" className="mr-2" />Create Puns</Link></MDBDropdownItem>
                  <MDBDropdownItem className='border-top' href='#' onClick={this.logOut}>Sign Out</MDBDropdownItem>
                  {/* {this.redirecting()} */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

        </MDBCollapse>
        </div>

      </MDBNavbar>
    )
  }
}

export default NavBar
