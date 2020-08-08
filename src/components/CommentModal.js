import React, { Component } from 'react'
import {
    MDBContainer, MDBModal, 
    MDBModalBody, MDBModalHeader, 
    MDBListGroup, MDBListGroupItem, 
    MDBInput,MDBBtn
} from 'mdbreact'

import api from '../api'

export class CommentModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentId : this.props.contentId,
            postComment : '',
            comments : this.props.comments,
            currentUser : this.props.currentUser
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state[event.target.name])
    }
    postComment = async (event) => {
        event.preventDefault();
        try {
            const payload = {
                contentId : this.props.contentId,
                comment : this.state.postComment,
                currentUser : this.state.currentUser
            }
            console.log(payload)
            const postComment = await api.postGifComment(payload)

            const result = await api.getOneGif(this.props.contentId)
            console.log(result.data)
            await this.setState({
                contentId : result.data._id,
                comments : result.data.comments
            }) 
            alert(this.state)      
        } catch (err) {
            this.setState({
                error: true
            })
        }
        
    }


    render() {
        console.log(this.props.comments)
        return (
            <MDBContainer>
            <MDBModal isOpen={this.props.commentModal} toggle={this.props.handleCommentModal}>
                <MDBModalHeader toggle={this.props.handleCommentModal} className='text-center'>
                    Comments
                </MDBModalHeader>
                <MDBModalBody>
                    <MDBListGroup style={{ width: "100%", height: '200px', overflow: 'scroll' }}>
                        {this.state.comments.map ((comment,index)=> {
                            return <MDBListGroupItem>
                                <div className="d-flex w-100 align-items-end">
                                    <p className="mb-1">{comment.description}</p>
                                </div>
                                <small className='text-right'>posted by :{comment.commentedBy} </small>
                            </MDBListGroupItem>
                        })
                        }
                    </MDBListGroup>
                    <form onSubmit={this.postComment}>
                        <MDBInput label='comment'
                            type='text'
                            name='postComment'
                            value={this.state.postComment}
                            onChange={this.handleChange}
                            required>
                        </MDBInput>
                        <MDBBtn color="primary" type='submit'>Post</MDBBtn>
                    </form>
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>

        )
    }
}

export default CommentModal
