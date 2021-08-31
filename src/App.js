import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import HomePage from './HomePage';
import GuitarTabPage from './GuitarTabPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="main-container">
          <Switch>
            <Route path="/tab/:path">
              <GuitarTabPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
