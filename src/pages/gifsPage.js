import React, { Component, Fragment } from 'react'
import NavBar from '../components/navBar'
import {MDBRow} from 'mdbreact'
import ContentCard from '../components/contentCard'

export class gifsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <MDBRow>
                    <img
                        src='https://i.imgur.com/AqFk9Ux.gif'
                        className="rounded-circle img-fluid mx-auto my-3 d-block"
                        alt="cat gif"
                        title='cat gif'
                        width='300' height='300' />
                </MDBRow>

                {/* fetch meme here */}

                <MDBRow style={{ width: "70%", justifyContent: "center" }} className='mx-auto'>
                    <ContentCard
                        imgUrl='https://i0.wp.com/www.dogwonder.co.uk/wp-content/uploads/2009/12/tumblr_ku2pvuJkJG1qz9qooo1_r1_400.gif?resize=320%2C320'
                        caption = 'Its friday!'
                        postedBy= 'username'
                        likeAmt = '7'
                        commentAmt = '3'
                    ></ContentCard>
                    <ContentCard
                        imgUrl='https://i.pinimg.com/originals/ae/c0/44/aec0445c6b1673136db065b176d1e888.gif'
                        caption= 'Whhaaaaaaaaaaaaattttttt'
                        postedBy= 'username'
                        likeAmt = '3'
                        commentAmt = ''
                    ></ContentCard>
                    <ContentCard
                        imgUrl='https://i.pinimg.com/originals/ae/c0/44/aec0445c6b1673136db065b176d1e888.gif'
                        caption= 'Areeeeeeee youuuuuuuuuuuuu'
                        postedBy= 'username'
                        likeAmt = '6'
                        commentAmt = '10'
                    ></ContentCard>
                    <ContentCard
                        imgUrl='https://i.pinimg.com/originals/ae/c0/44/aec0445c6b1673136db065b176d1e888.gif'
                        caption= 'Thattttt wasssssss impressiveeeeeeee'
                        postedBy= 'username'
                        likeAmt = '6'
                        commentAmt = '10'
                    ></ContentCard>
                    <ContentCard
                        imgUrl='https://i.imgur.com/zByMh1H.gif'
                        caption= 'Kyah yah yah yah yah kya wha give me a hug!'
                        postedBy= 'username'
                        likeAmt = '6'
                        commentAmt = '10'
                    ></ContentCard>
                    <ContentCard
                        imgUrl='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
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
export default gifsPage
