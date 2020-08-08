import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export class footer extends Component {

    footerStyle = () => {
        return {
            position: 'fixed',
            left : '0',
            bottom : '0',
            width: '100%'
        }
    }
    render() {
        return (
            <MDBFooter color="rgba-black-strong" className="font-small mt-4" style={this.footerStyle()}>
                    <MDBContainer fluid className="footer-copyright text-center py-3">
                        &copy; {new Date().getFullYear()} Developed by JJYJ | Playboy starter pack | <a href="/dashboard"> Disclaimer </a>
                    </MDBContainer>
            </MDBFooter>
        )
    }
}
export default footer
