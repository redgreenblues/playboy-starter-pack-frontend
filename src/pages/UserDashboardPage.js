import React, { Component, Fragment } from 'react';
import NavBar from '../components/navBar';
import { MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact';
import api from '../api';
import UserGifs from '../components/UserGifs';
import UserMemes from '../components/UserMemes';
import UserPuns from '../components/UserPuns';
import defaultProfilePic from '../public/default-profile-pic.jpg'

class UserDashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            profileImg: '',
            profileBio: '',
            memes: [],
            gifs: [],
            puns: [],
            memesLoading: false,
            gifsLoading: false,
            punsLoading: false
        }
    }

    componentDidMount = async () => {
        try {
            const response = await api.getUser();
            this.setState({
                username: response.data.username,
                profileImg: response.data.profileImg,
                authenticated: true
            })
        } catch (err) {
            console.log(err)
            this.setState({
                authenticated: false
            })
        }
    }

    getGifsByUser = async () => {
        try {
            const response = await api.getGifsByUser(this.state.username)
            this.setState({
                gifs: response.data,
                gifsLoading: !this.state.gifsLoading,
                memesLoading: false,
                punsLoading: false
            })
        } catch (err) {
            console.log(err)
        }
    }

    getMemesByUser = async () => {
        try {
            const response = await api.getMemesByUser(this.state.username)
            this.setState({
                memes: response.data,
                memesLoading: !this.state.memesLoading,
                gifsLoading: false,
                punsLoading: false
            })
        } catch (err) {
            console.log(err)
        }
    }

    getPunsByUser = async () => {
        try {
            const response = await api.getPunsByUser(this.state.username)
            this.setState({
                puns: response.data,
                punsLoading: !this.state.punsLoading,
                gifsLoading: false,
                memesLoading: false
            })
            console.log(this.state.puns)
        } catch (err) {
            console.log(err)
        }
    }

    memesHeaderStyle = () => {
        return {
            color: this.state.memesLoading ? '#000' : '',
            fontWeight: this.state.memesLoading ? '400' : ''
        } 
    }

    gifsHeaderStyle = () => {
        return {
            color: this.state.gifsLoading ? '#000' : '',
            fontWeight: this.state.gifsLoading ? '400' : ''
        } 
    }

    punsHeaderStyle = () => {
        return {
            color: this.state.punsLoading ? '#000' : '',
            fontWeight: this.state.punsLoading ? '400' : ''
        } 
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <MDBRow>
                    <MDBCol className="text-center mt-4">
                        {this.state.profileImg ? <img src={this.state.profileImg} className="img-fluid z-depth-1 rounded-circle" alt="" style={{ width: '10%' }} />
                        : <img src={defaultProfilePic} className="img-fluid z-depth-1 rounded-circle" alt="" style={{ width: '10%' }} />}
                    </MDBCol>
                </MDBRow>

                <MDBCardBody>
                    <MDBCardTitle className="indigo-text h3 mt-2">
                        {this.state.username}
                    </MDBCardTitle>

                    {this.state.profileBio ? <MDBCardText className='m-4'>{this.state.profileBio}</MDBCardText> : null}

                    <MDBCol className="d-flex justify-content-center border-top" md="12" style={{ width: '65%', margin: '0 auto' }}>
                        <MDBCol md="4" className="d-flex justify-content-around align-items-center p-4">
                            <h3 className="user-content-header" onClick={this.getMemesByUser} style={this.memesHeaderStyle()}>
                                Memes
                            </h3>
                            <h3 className="user-content-header" onClick={this.getGifsByUser} style={this.gifsHeaderStyle()}>
                                Gifs
                            </h3>
                            <h3 className="user-content-header" onClick={this.getPunsByUser} style={this.punsHeaderStyle()}>
                                Puns
                            </h3>
                        </MDBCol>
                    </MDBCol>

                </MDBCardBody>
                <div className='user-content'>
                    {this.state.gifsLoading ? this.state.gifs.map(gif =>
                        <UserGifs
                            imgUrl={gif.content}
                            caption={gif.caption}
                            postedBy={gif.username}
                            key={gif._id} />) : null}
                    {this.state.memesLoading ? this.state.memes.map(meme =>
                        <UserMemes
                            imgUrl={meme.content}
                            caption={meme.caption}
                            postedBy={meme.username}
                            key={meme._id} />) : null}
                    {this.state.punsLoading ? this.state.puns.map(pun =>
                        <UserPuns
                            pun={pun.content}
                            caption={pun.caption}
                            postedBy={pun.username}
                            key={pun._id} />) : null}
                </div>
            </Fragment>
        )
    }
}

export default UserDashboardPage
