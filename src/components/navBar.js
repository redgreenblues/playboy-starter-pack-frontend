import React, { Component } from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCardTitle
  } from "mdbreact";
import {Link} from 'react-router-dom';


export class NavBar extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
    render() {
        return (

            <MDBNavbar color="rgba-black-strong" dark expand="md">
              <MDBNavbarBrand>
                <Link to='/'><strong className="white-text">Username</strong></Link>
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
                        <MDBDropdownItem href="#!">memes</MDBDropdownItem>
                        <MDBDropdownItem href="#!">gifs</MDBDropdownItem>
                        <MDBDropdownItem href="#!">puns</MDBDropdownItem>
                        <MDBDropdownItem href="#!">logout</MDBDropdownItem>
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
