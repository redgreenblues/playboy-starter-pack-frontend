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
                <NavBar />
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
                                likeAmt= {0}
                                key={pun._id}
                            />
                        })
                        :
                        null
                    }
                    <ContentCard
                        pun= 'I lost my job at the bank on my very first day. A woman asked me to check her balance, so I pushed her over'
                        caption = 'Its friday!'
                        postedBy= 'username'
                        likeAmt = '7'
                        commentAmt = '3'
                    ></ContentCard>
                    <ContentCard
                        pun='I Renamed my iPod The Titanic, so when I plug it in, it says “The Titanic is syncing.'
                        caption= 'Whhaaaaaaaaaaaaattttttt'
                        postedBy= 'username'
                        likeAmt = '3'
                        commentAmt = ''
                    ></ContentCard>
                    <ContentCard
                        pun= 'How do you make holy water? You boil the hell out of it'
                        caption= 'Areeeeeeee youuuuuuuuuuuuu'
                        postedBy= 'username'
                        likeAmt = '6'
                        commentAmt = '10'
                    ></ContentCard>
                    <ContentCard
                        pun= 'Last night, I dreamed I was swimming in an ocean of orange soda. But it was just a Fanta sea'
                        caption= 'Thattttt wasssssss impressiveeeeeeee'
                        postedBy= 'username'
                        likeAmt = '6'
                        commentAmt = '10'
                    ></ContentCard>
                    <ContentCard
                        pun= 'I was wondering why the ball was getting bigger. Then it hit me'
                        caption= 'Kyah yah yah yah yah kya wha give me a hug!'
                        postedBy= 'username'
                        likeAmt = '6'
                        commentAmt = '10'
                    ></ContentCard>
                    <ContentCard
                        pun= 'Will glass coffins be a success? Remains to be seen'
                        caption= 'MDBbootstrap starter pack'
                        postedBy= 'username'
                        likeAmt = '6'
                        commentAmt = '10'
                    ></ContentCard>
                </MDBRow>
            </Fragment>
        )
    }
}

export default PunsPage
