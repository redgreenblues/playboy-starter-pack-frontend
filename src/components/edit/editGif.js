import React, { Component, Redirect } from 'react'
import {
    MDBContainer, MDBModal, 
    MDBModalBody, MDBModalHeader, 
    MDBListGroup, MDBListGroupItem, 
    MDBInput,MDBBtn
} from 'mdbreact'


import api from '../../api';

export class editGifModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.state.id,
            gifImg: '',
            gifCaption: '',
            currentUser : this.state.currentUser,
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleEditGif = (gifImg) => {
        this.props.handleEditGif(gifImg)
    }


    redirecting = () => { // adding a function to redirect
        if (this.state.addSuccess) {
            this.setState({
                addSuccess : false
            })
            return <Redirect to='/gifs' />
        } else return false
    }

    EditOneGif = async event => {
        event.preventDefault();
        try {
            const payload = {
                id : this.state.id,
                caption : this.state.caption,
                imgUrl : this.state.imgUrl
            }
            await api.getGifById(payload);
            const result = await api.getGifById(this.state.id)
            this.setState({
                id : result.data._id,
                gifImg: result.data.gifImg,
                gifCaption: result.data.gifCaption,
            })
            console.log('this.state is: ', this.state)
            await this.redirecting()
        } catch (err) {
            this.setState({
                error: true
            })
        }
    }

render() {
    return (
        <MDBContainer>
        <MDBModal 
        isOpen={this.props.editGifModal} 
        toggle={this.props.handleGifModal}>
            <MDBModalHeader toggle={this.props.handleGifModal} className='text-center'>
                Edit Gif
            </MDBModalHeader>
            <MDBModalBody>
                {/* <MDBListGroup style={{ width: "100%", height: '200px', overflow: 'scroll' }}>
                    {this.state.gifs.map ((comment,index)=> {
                        return <MDBListGroupItem className ={index}>
                            <div className="d-flex w-100 align-items-end">
                                <p className="mb-1">{comment.description}</p>
                            </div>
                            <small className='text-right'>posted by :{comment.commentedBy} </small>
                        </MDBListGroupItem>
                    })
                }
                </MDBListGroup> */}
                {/* <form onSubmit={this.getGifById}>
                                    <MDBInput label='Edit a giphy image'
                                        type='url'
                                        name='getGifById'
                                        accept='.gif'
                                        value={this.state.getGifById}
                                        onChange={this.handleChange}>
                                    </MDBInput>
                                    <MDBInput label='caption'
                                        type='text'
                                        name='gifCaption'
                                        value={this.state.gifCaption}
                                        onChange={this.handleChange}>
                                    </MDBInput>
                                    <MDBBtn type='submit'>Edit gif</MDBBtn>
                                </form> */}
            </MDBModalBody>
        </MDBModal>
    </MDBContainer>

    )
  }
}

export default editGifModal