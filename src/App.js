import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import landingPage from './components/landingPage';
import signUpPage from './components/signUpPage';
import dashboardPage from './components/dashboardPage';
import gifsPage from './components/gifsPage';
import memesPage from './components/memesPage';
import punsPage from './components/punsPage';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/app"
// BACKEND_URL = url after backend has deployed //


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={landingPage}/>
      <Route path="/signup" exact component={signUpPage}/>
      <Route path="/dashboard" exact component={dashboardPage}/>
      <Route path="/gifs" exact component={gifsPage}/>
      <Route path="/memes" exact component={memesPage}/>
      <Route path="/puns" exact component={punsPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
