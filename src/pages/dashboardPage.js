import React, { Component, Fragment } from 'react'
import Features from '../components/features.js'

import NavBar from '../components/navBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
    UserDashboardPage,
    GifsPage,
    MemesPage,
    PunsPage,
    NewMeme,
    NewGif,
    NewPun,
    ProtectedRoute,
  }
    from '../pages'

// class DashboardPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//         }
//     }

//     render() {
//         return (
//             <Fragment>
//                 <Header />
//                 <NavBar /> 
//                 {/* first time NavBar is rendered */}
//                 <Features /> 
//             </Fragment>
//         )
//     }
// }


class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
    }

    render() {
        return (
            <Router>
                {/* <Header /> */}
                <NavBar />
                <Switch>
                    {/* <Route path= '/' exact component={LandingPage}/> */}
                    <ProtectedRoute path="/dashboard" exact component={Features}/>
                    <ProtectedRoute path="/profile" exact component={UserDashboardPage} />
                    <Route path="/gifs" exact component={GifsPage} />
                    <Route path="/memes" exact component={MemesPage} />
                    <Route path="/puns" exact component={PunsPage} />
                    <Route path="/new/meme" exact component={NewMeme} />
                    <Route path="/new/pun" exact component={NewPun} />
                    <Route path="/new/gif" exact component={NewGif} />
                </Switch>
                {/* first time NavBar is rendered */}
                
            </Router>
        )
    }
}

export default DashboardPage
