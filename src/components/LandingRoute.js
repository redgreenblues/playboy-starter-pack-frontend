import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  LandingPage,
  SignUpPage,
  DashboardPage,
  UserDashboardPage,
  GifsPage,
  MemesPage,
  PunsPage,
  NewMeme,
  NewGif,
  NewPun,
  ProtectedRoute
}
  from '../pages'
  import api from '../api';

class LandingRoute extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       profileImg :''
    }
  }
  
  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/"  component={LandingPage} />
              <Route path="/signup" component={SignUpPage} />
              <ProtectedRoute path="/session" component={DashboardPage} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    )
  }
}
export default LandingRoute
