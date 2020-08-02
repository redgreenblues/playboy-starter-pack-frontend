import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import landingPage from '../pages/landingPage';
import signUpPage from '../pages/signUpPage';
import dashboardPage from '../pages/dashboardPage';
import gifsPage from '../pages/gifsPage';
import memesPage from '../pages/memesPage';
import punsPage from '../pages/punsPage';
import NewMeme from './create/newMeme'
import NewPun from './create/newPun'
import NewGif from './create/newGif'

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
              <Route path="/new/meme" exact component={NewMeme}/>
              <Route path="/new/pun" exact component={NewPun}/>
              <Route path="/new/gif" exact component={NewGif}/>
              </Switch>
            </div>
          </Router>
          </Fragment>
        )
      }
    }
    

export default MainContent
