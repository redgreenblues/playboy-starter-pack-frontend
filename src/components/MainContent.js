import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
  NewPun,
  ProtectedRoute
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
              <ProtectedRoute path="/profile" exact component={UserDashboardPage} />
              <ProtectedRoute path="/dashboard" exact component={DashboardPage} />
              <Route path="/gifs" exact component={GifsPage} />
              <Route path="/memes" exact component={MemesPage} />
              <Route path="/puns" exact component={PunsPage} />
              <Route path="/new/meme" exact component={NewMeme} />
              <Route path="/new/pun" exact component={NewPun} />
              <Route path="/new/gif" exact component={NewGif} />
              {/* <Route exact path="/"><Redirect exact from="/" to="dashboard" /></Route>
              <Route path="*"><Redirect from="/" to="dashboard" /></Route> */}
            </Switch>
          </div>
        </Router>
      </Fragment>
    )
  }
}


export default MainContent

