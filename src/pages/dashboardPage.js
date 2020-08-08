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
import api from '../api'

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
    componentDidMount = async () => {
        try {
            const response = await api.getUser();
            console.log(response.data)
            this.setState({
                userId: response.data._id,
                username: response.data.username,
                profileImg: response.data.profileImg,
                profileBio: response.data.profileBio,
                authenticated: true
            })
        } catch (err) {
            console.log(err)
            this.setState({
                authenticated: false
            })
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
                    <Route exact path="/gifs" render = {(props) => <GifsPage {...props} username={this.state.username} />} />
                    <Route exact path="/memes" render = {(props) => <MemesPage {...props} username={this.state.username} /> }/>
                    <Route exact path="/puns" render = {(props) => <MemesPage {...props} username={this.state.username} />}/>
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
