import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  LandingPage,
  SignUpPage,
  UserDashboardPage,
  DashboardPage,
  GifsPage,
  MemesPage,
  PunsPage,
  NewMeme,
  NewGif,
  NewPun
}
  from '../pages'


class MainContent extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/signup" exact component={SignUpPage} />
              <PrivateRoute path="/admin" component={Admin} />
              <Route path="/profile" exact component={UserDashboardPage} />
              <Route path="/dashboard" exact component={DashboardPage} />
              <Route path="/gifs" exact component={GifsPage} />
              <Route path="/memes" exact component={MemesPage} />
              <Route path="/puns" exact component={PunsPage} />
              <Route path="/new/meme" exact component={NewMeme} />
              <Route path="/new/pun" exact component={NewPun} />
              <Route path="/new/gif" exact component={NewGif} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    )
  }
}


export default MainContent
