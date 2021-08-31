import React from 'react';
import {
  BrowserRouter as Router,
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
        <div>
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
}

export default App;
