import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Introduction from './pages/Introduction';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/intro" component={Introduction} />
          <Route path="/dashboard" component={Dashboard} />
        </div>

      </Router>
    );
  }
}

export default App;
