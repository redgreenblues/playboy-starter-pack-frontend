import React, { Fragment } from 'react';
import MainContent from './components/MainContent'
// import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./pages/protectedRoute";

import './App.css';

// function App() {
//   return (
//     <Fragment>
//       <MainContent />
//       <h1>footer component</h1>
//     </Fragment>
//   );
// }

// export default App; 
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <signUpPage />
        </Route>

        <ProtectedRoute>
          <Fragment>
            <MainContent />
            <h1>footer component</h1>
          </Fragment>
        </ProtectedRoute>
        
        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="dashboard" />
        </Route>
      </Switch>
    </Router>
  );
}