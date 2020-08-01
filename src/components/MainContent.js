import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import landingPage from './pages/landingPage';
import signUpPage from './pages/signUpPage';
import dashboardPage from './pages/dashboardPage';
import gifsPage from './pages/gifsPage';
import memesPage from './pages/memesPage';
import punsPage from './pages/punsPage';
import newMeme from './create/newMeme'
import newPun from './create/newPun'
import newGif from './create/newGif'

export class MainContent extends Component {
    render() {
        return (
          <Fragment>
          <Router>
            <div className="App">
              <Switch>
              <Route path="/" exact component={landingPage}/>
              <Route path="/signup" exact component={signUpPage}/>
              <Route path="/dashboard" exact component={dashboardPage}/>
              <Route path="/gifs" exact component={gifsPage}/>
              <Route path="/memes" exact component={memesPage}/>
              <Route path="/puns" exact component={punsPage}/>
              <Route path="/new/meme" exact component={newMeme}/>
              <Route path="/new/pun" exact component={newPun}/>
              <Route path="/new/gif" exact component={newGif}/>
              </Switch>
            </div>
          </Router>
          </Fragment>
        )
      }
    }
    

export default MainContent
