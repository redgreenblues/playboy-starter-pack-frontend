import React, { Component, Fragment } from 'react'
import {
    MDBCol, MDBRow, MDBBtn, 
    MDBCard, MDBCardBody, MDBCardTitle, 
    MDBCardImage, MDBIcon, MDBCardText, 
    MDBCardFooter
} from 'mdbreact'
import CommentModal from './CommentModal'

import api from '../api';

class UserContentCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: this.props.likeAmt,
            commentModal: false,
            commentAmt: this.props.commentAmt
        }
    }

    toggleCommentModal = () => {
        this.setState({
            commentModal: !this.state.commentModal
        })
    }
    updateComment = (commentAmt) => {
        this.setState({
            commentAmt : commentAmt
        })
    }

    // on click function to update likes
    handleLikes = async content => {
        const id = this.props.id;
        await this.setState({
            likes: this.state.likes + 1
        })
        const payload = {
            likes: this.state.likes
        }
        try {
            if (content === 'Meme') await api.updateMeme(id, payload);
            if (content === 'Gif') await api.updateGif(id, payload);
            if (content === 'Pun') await api.updatePun(id, payload);
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <Fragment>
                <MDBCard style={{ width: "22rem" }} className='m-4'>

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
                        <MDBBtn href="#" size="sm">Edit</MDBBtn> {/*edit route*/}
                        <MDBBtn href="#" size="sm">delete</MDBBtn>{/*delete route*/}
                    </MDBCardBody>
                    <MDBRow className='mx-0 p-2 justify-content-center align-items-end' style={{ flex: '1 1 auto' }}>
                        <MDBCol>
                            <MDBIcon icon="share" size="lg" className="m-auto align-self-center thumbs-up"/>
                        </MDBCol>
                        <MDBCol>

                            <MDBRow className='mx-auto justify-content-center'>
                                <MDBIcon icon="thumbs-up" size="lg" className="m-auto align-self-center thumbs-up" onClick={() => this.handleLikes(this.props.contentType)} />
                                <h5 className="font-weight-light m-auto">{this.state.likes}</h5>
                            </MDBRow>

                        </MDBCol>
                        <MDBCol>

                        <MDBRow className='mx-auto justify-content-center' >
                            <MDBIcon icon="comment-dots" onClick={()=> {this.toggleCommentModal()}} size="lg" className="m-auto align-self-center thumbs-up" />
                            <h5 className="font-weight-light m-auto align-self-center"> {this.state.commentAmt}</h5>
                        </MDBRow>

                        </MDBCol>
                    </MDBRow>
                    <MDBCardFooter color="grey lighten-1" >
                        posted by,
                        <a href='/username' className='text-decoration-none'>{this.props.postedBy}</a>
                    </MDBCardFooter>
                </MDBCard>
                {/* comment section */}
                {this.state.commentModal? 
                    <CommentModal
                        currentUser = {this.props.currentUser}
                        id ={this.props.id}
                        commentModal ={this.state.commentModal}
                        comments = {this.props.comments}
                        handleCommentModal = {this.toggleCommentModal}
                        content = {this.props.contentType}
                        handleComment = {this.updateComment}
                    />
                    :
                    null
                    }
            </Fragment>
        )
    }
}

export default UserContentCard
