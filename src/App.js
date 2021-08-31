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
            <Route path="/tab/:id" component={GuitarTabPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
