import React, { Component } from 'react'
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom';

 const h5Style = {
   textDecoration : 'none',
   color : '#212529'
 }
export class Features extends Component {

    render() {
        return (
            <section className="text-center my-5 w-75 mx-auto">
        <h2 className="h1-responsive font-weight-bold my-5">
          "There is no strong beer only weak men."
        </h2>
        <MDBRow>
          <MDBCol md="4">
          <Link to ='/gifs'><MDBIcon icon="chart-area" size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4" style={h5Style}>GIFS</h5></Link>
            <p className="grey-text mb-md-0 mb-5">
              Express yourself with giphys to make your conversation with her lighted
              ,making her feel comfortable and at ease at all times.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <Link to ='/puns'><MDBIcon icon="book" size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-4" style={h5Style}>PUNS</h5></Link>
            <p className="grey-text mb-md-0 mb-5">
              Intelligent attracts, period. So go dazzle your girl with puns that would leave her star-strucked. 
            </p>
          </MDBCol>
          <MDBCol md="4">
            <Link to ='/memes'><MDBIcon far icon="comments" size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4" style={h5Style}>MEMES</h5></Link>
            <p className="grey-text mb-md-0 mb-5">
              A collection of cultural and behavioral expression enough to bring sunshine 
              and laughters to your lady.  
            </p>
          </MDBCol>
        </MDBRow>
      </section>
        )
    }
}

export default Features
