import React, { Component, Fragment } from 'react'
import NavBar from '../components/navBar'
import { MDBRow } from 'mdbreact'
import ContentCard from '../components/contentCard'
import api from '../api'

export class GifsPage extends Component {
    state = {
        gifData: ''
    }

    componentDidMount = async () => {
        try {
            const response = await api.getAllGifs()

            this.setState({
                gifData: response.data
            })
            console.log(this.state.gifData)
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
                        src='https://i.imgur.com/AqFk9Ux.gif'
                        className="rounded-circle img-fluid mx-auto my-3 d-block"
                        alt="cat gif"
                        title='cat gif'
                        width='300' height='300' />
                </MDBRow>
                <MDBRow style={{ width: "70%", justifyContent: "center" }} className='mx-auto'>
                    {this.state.gifData ?
                        this.state.gifData.map((gif, index) => {
                            return <ContentCard
                                imgUrl={gif.content}
                                caption={gif.caption}
                                postedBy={gif.username}
                                commentAmt={gif.comments.length}
                                likeAmt= {gif.likes}
                                id={gif._id}
                                key={gif._id}
                                contentType={gif.contentType}
                            />
                        })
                        : null
                    }
                </MDBRow>
            </Fragment>
        )
    }
}
export default GifsPage
