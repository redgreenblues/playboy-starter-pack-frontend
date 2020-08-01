import React, { Component, Fragment } from 'react'
import NavBar from '../navBar'
import {MDBRow} from 'mdbreact'
import ContentCard from '../contentCard'


export class memesPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <MDBRow>
                    <img
                        src='https://www.netbase.com/wp-content/uploads/Brands%E2%80%99-Meme-Marketing-Makes-Sentiment-Analysis-More-Important-Than-Ever.png'
                        className=" img-fluid mx-auto my-3 d-block"
                        alt="memes title"
                        title='memes title'
                        width='300' height='300' />
                </MDBRow>

                {/* fetch meme here */}

                <MDBRow style={{ width: "70%", justifyContent: "center" }} className='mx-auto'>
                    <ContentCard
                        imgUrl='https://pics.me.me/when-you-hate-your-job-but-cant-quit-because-people-24711873.png'
                        caption = 'Its friday!'
                        postedBy= 'username'
                        likeAmt = '7'
                        commentAmt = '3'
                    ></ContentCard>
                    <ContentCard
                        imgUrl='https://pics.me.me/good-job-fun-job-outside-job-bad-job-boring-job-14385736.png'
                        caption= 'Whhaaaaaaaaaaaaattttttt'
                        postedBy= 'username'
                        likeAmt = '3'
                        commentAmt = ''
                    ></ContentCard>
                    <ContentCard
                        imgUrl='https://pics.me.me/damn-the-person-reading-this-is-cute-43373379.png'
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

export default memesPage
