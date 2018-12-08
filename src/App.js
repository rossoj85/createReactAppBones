import React, { Component } from 'react';
import { Route, Switch, Fade, BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import {AccessPage} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HELLO!!</h1>
          <Router>
            <Route exact path='/' render={AccessPage} />
          </Router>
      </div>
    );
  }
}

export default App;
