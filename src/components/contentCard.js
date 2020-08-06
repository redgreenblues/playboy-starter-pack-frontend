import React, { Component, Fragment } from 'react'
import { MDBCol, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBIcon, MDBCardText, MDBCardFooter } from 'mdbreact'
import api from '../api';

class ContentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: this.props.likeAmt
        }
    }


    // on click function to update likes
    handleLikes = async content => {
        const id = this.props.id;

        const payload = {
            likes: this.state.likes
        }
        try {
            if (content === 'Meme') await api.updateMeme(id, payload);
            if (content === 'Gif') await api.updateGif(id, payload);
            if (content === 'Pun') await api.updatePun(id, payload);
            this.setState({
                likes: this.state.likes + 1
            })
        } catch (err) {
            console.log(err)
        }
        
    }

    render() {
        return (
            <Fragment>
                <MDBCard style={{ width: "22rem" }} className='m-4'>
                    {/*contenttype === puns? if true render text : if false render image*/}
                    <MDBCardImage
                        style={{ width: '100%', height: 'auto' }}
                        className="img-fluid mx-auto"
                        src={this.props.imgUrl}
                        waves>
                    </MDBCardImage>
                    <MDBCardTitle className='mx-2 p-2 border-bottom'>{this.props.pun}</MDBCardTitle>
                    <MDBCardBody style={{ flex: '0 1 auto' }}>
                        <MDBCardText>
                            {this.props.caption}
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBRow className='mx-0 p-2 justify-content-center align-items-end' style={{ flex: '1 1 auto' }}>
                        <MDBCol>
                            <MDBIcon icon="share" size="lg" />
                        </MDBCol>
                        <MDBCol>
                            <MDBRow className='mx-auto justify-content-center'>
                                <MDBIcon icon="thumbs-up" size="lg" className="m-auto align-self-center thumbs-up" onClick={() => this.handleLikes(this.props.contentType)} />
                                <h5 className="font-weight-light m-auto"> {this.state.likes}</h5>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow className='mx-auto justify-content-center'>
                                <MDBIcon icon="comment-dots" size="lg" className="m-auto align-self-center" />
                                <h5 className="font-weight-light m-auto align-self-center"> {this.props.commentAmt}</h5>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                    <MDBCardFooter color="grey lighten-1" >
                        posted by,
                        <a href='/username' className='text-decoration-none'>{this.props.postedBy}</a>
                    </MDBCardFooter>
                </MDBCard>
            </Fragment>
        )
    }
}

export default ContentCard
