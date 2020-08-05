import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


export class EditProfilePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             modal:false
        }
    }
    


    render() {
        return (
        <MDBContainer>
            <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
            <MDBModalBody>
                (...)
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        );
    }
    
}

export default EditProfilePage
