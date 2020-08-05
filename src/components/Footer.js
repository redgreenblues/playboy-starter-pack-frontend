import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export class footer extends Component {

    render() {
        return (
            <MDBFooter color="rgba-black-strong" className="font-small mt-4">
                    <MDBContainer fluid className="footer-copyright text-center py-3">
                        &copy; {new Date().getFullYear()} Developed by JJYJ | Playboy starter pack | <a href="/disclaimer"> Disclaimer </a>
                    </MDBContainer>
            </MDBFooter>
        )
    }
}
export default footer
