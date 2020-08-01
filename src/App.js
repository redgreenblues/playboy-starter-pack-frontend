import React, { Fragment} from 'react';
import MainContent from './components/MainContent'

import './App.css';


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/app"
// BACKEND_URL = url after backend has deployed //

function App() {
  return (
    <Fragment>
    <MainContent/>
    <h1>footer component</h1>
    </Fragment>
  );
}

export default App;
