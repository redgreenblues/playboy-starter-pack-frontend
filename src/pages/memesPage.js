import React, { Component, Fragment } from 'react'
import {MDBRow} from 'mdbreact'
import ContentCard from '../components/contentCard'
import api from '../api'

export class MemesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
             memesData : ''
        }
    }
    
    componentDidMount = async () => {
        try {
            const response = await api.getAllMemes()

            this.setState({
                memesData: response.data
            })
            console.log(this.state.memesData)
        } catch (err) {
            console.log(err)
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
                        src='https://www.netbase.com/wp-content/uploads/Brands%E2%80%99-Meme-Marketing-Makes-Sentiment-Analysis-More-Important-Than-Ever.png'
                        className=" img-fluid mx-auto my-3 d-block"
                        alt="memes title"
                        title='memes title'
                        width='300' height='300' />
                </MDBRow>


                <MDBRow style={{ width: "70%", justifyContent: "center" }} className='mx-auto'>
                {/* fetch meme here */}
                    {this.state.memesData ?
                        this.state.memesData.map((meme, index) => {
                            return <ContentCard
                                imgUrl={meme.content}
                                caption={meme.caption}
                                postedBy={meme.username}
                                commentAmt={meme.comments.length}
                                likeAmt= {meme.likes}
                                id={meme._id}
                                key={meme._id}
                                contentType={meme.contentType}
                            />
                        })
                        : null
                    }
                </MDBRow>
            </Fragment>
        )
    }
}

export default MemesPage
