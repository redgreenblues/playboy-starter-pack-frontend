import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';

class Game extends Component {
    render() {
        return (
            <div className="game mt-5">
                <h1 className="font-weight-normal">So You Think You Are Worthy Of Being Called a Playboy?</h1>
                <p className="lead">
                    Knowing some memes, gifs or puns won't let you get anywhere,
                    <br />
                    Pass this test first and determine if you are worthy.
                </p>
                <MDBBtn color="pink">Get Started</MDBBtn>
            </div>
        )
    }
}

export default Game
