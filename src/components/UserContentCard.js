import React, { Component, Fragment } from 'react'
import {
    MDBCol, MDBRow, MDBBtn, 
    MDBCard, MDBCardBody, MDBCardTitle, 
    MDBCardImage, MDBIcon, MDBCardText, 
    MDBCardFooter
} from 'mdbreact'
import CommentModal from './CommentModal'

class UserContentCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            commentModal: false
        }
    }
    toggleCommentModal = () => {
        this.setState({
            commentModal: !this.state.commentModal
        })
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
                            <MDBIcon icon="share" size="lg" />
                        </MDBCol>
                        <MDBCol>

                            <MDBRow className='mx-auto justify-content-center'>
                                <MDBIcon icon="thumbs-up" size="lg" className="m-auto align-self-center" />
                                <h5 className="font-weight-light m-auto"> {this.props.likeAmt}</h5>
                            </MDBRow>

                        </MDBCol>
                        <MDBCol>

                        <MDBRow className='mx-auto justify-content-center' >
                            <MDBIcon icon="comment-dots" onClick={this.toggleCommentModal} size="lg" className="m-auto align-self-center" />
                            <h5 className="font-weight-light m-auto align-self-center"> {this.props.commentAmt}</h5>
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
                        contentId ={this.props.contentId}
                        commentModal ={this.state.commentModal}
                        comments = {this.props.comments}
                        handleCommentModal = {this.toggleCommentModal}
                    />
                    :
                    null
                    }
            </Fragment>
        )
    }
}

export default UserContentCard
