import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Introduction from './pages/Introduction';
import Dashboard from './pages/Dashboard';
import Tomato from './pages/Plugins/Tomato/Tomato'
import Todo from './pages/Plugins/Todo/Todo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/intro" component={Introduction} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/tomato" component={Tomato} />
          <Route path="/todo" component={Todo} />
        </div>

      </Router>
    );
  }
}

export default App;
