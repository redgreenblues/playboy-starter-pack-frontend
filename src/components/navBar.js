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
      username: ''
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
        authenticated: true
      })
      console.log(response)
      console.log(this.state.username)
    } catch (err) {
      console.log(err)
      this.setState({
        authenticated: false
      })
    }
  }

  redirecting = () => {
    if (this.state.loggedOut) return <Redirect to='/' />
    else return false
  }

  logOut = async () => {
    try {
      const response = await api.logOut();
      console.log(response)
      this.setState({
        loggedOut: true
      })
      await this.redirecting();
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <MDBNavbar color="rgba-black-strong" dark expand="md">
        <MDBNavbarBrand>
          <Link to={`/${this.state.username}`}><strong className="white-text">{this.state.username}</strong></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>

            <MDBNavItem>
              <MDBNavLink to="/memes">Memes</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/gifs">Gifs</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/puns">Puns</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBCardTitle className='m-2 border-bottom text-center'>create</MDBCardTitle>
                  <MDBDropdownItem href="/new/meme">memes</MDBDropdownItem>
                  <MDBDropdownItem href="/new/gif">gifs</MDBDropdownItem>
                  <MDBDropdownItem href="/new/pun">puns</MDBDropdownItem>
                  <MDBDropdownItem onClick={this.logOut}>logout</MDBDropdownItem>
                  {this.redirecting()}
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
      </MDBNavbar>
    )
  }
}

export default NavBar
