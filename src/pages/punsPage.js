import React, { Component, Fragment } from 'react'
import NavBar from '../components/navBar'
import {MDBRow} from 'mdbreact'
import ContentCard from '../components/contentCard'
import api from '../api'

export class PunsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
             punsData : ''
        }
    }
    
    componentDidMount = async () => {
        try {
            const response = await api.getAllPuns()

            this.setState({
                punsData: response.data
            })
            console.log(this.state.punsData)
        } catch (err) {
            this.setState({
                error: err
            })
        }
    }
    render() {
        return (
            <Fragment>
                {/* <NavBar /> */}
                <MDBRow>
                    <img
                        src='https://i.redd.it/4iqm06sb22b01.jpg'
                        className=" img-fluid mx-auto my-3 d-block"
                        alt="memes title"
                        title='memes title'
                        width='300' height='300' />
                </MDBRow>

                <MDBRow style={{ width: "70%", justifyContent: "center" }} className='mx-auto'>
                    {this.state.punsData ?
                        this.state.punsData.map((pun, index) => {
                            return <ContentCard
                                pun={pun.content}
                                caption={pun.caption}
                                postedBy={pun.username}
                                commentAmt={pun.comments.length}
                                likeAmt= {pun.likes}
                                id={pun._id}
                                key={pun._id}
                                contentType={pun.contentType}
                            />
                        })
                        : null
                    }
                </MDBRow>
            </Fragment>
        )
    }
}

export default PunsPage
