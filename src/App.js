import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'mdi/css/materialdesignicons.css'
// import './style/font-awesome.css'
import Introduction from './pages/Introduction';
import Dashboard from './pages/Dashboard';
import Cardbox from './pages/Cardbox'
import Tomato from './pages/Plugins/Tomato/Tomato'
import Todo from './pages/Plugins/Todo/Todo'
import Anniversary from './pages/Plugins/Anniversary/Anniversary'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { Navbar, Section, Columns, Column, Menu, Card } from './somnus'
import avator from './avator.jpeg';
import cn from 'classnames'

class App extends Component {
  constructor(props) {
    super(props);

    this.necks = [
      {
        index: 'home',
        url: '/home',
        icon: 'home',
        name: '控制台'
      },
      {
        index: 'cardbox',
        url: '/cardbox',
        icon: 'grid-large',
        name: '卡片'
      },
      {
        index: 'charts',
        url: '/charts',
        icon: 'chart-line',
        name: '图表'
      },
      {
        index: 'settings',
        url: '/settings',
        icon: 'settings',
        name: '设置'
      }
    ]
  }


  render() {
    // const { necks } = this.state
    return (
      <Router>
        <div>
          <Columns className="home-header">
            <Column span="2">
              <span className="home-header-name">home</span>
            </Column>
            <Column span="7">
            </Column>
            <Column span="3" className="home-header-person">
              <img src={avator} />
              <span className="home-header-person-name">Luke Lee</span>
              <span className="home-header-person-button">
                <i className="mdi mdi-login"></i>
              </span>
            </Column>
          </Columns>
          <div className="home-neck is-clearfix">
            <span className="home-neck-group ">
              {
                this.necks.map(neck =>
                  <NavLink key={neck.index} to={neck.url} activeClassName="is-active" className="home-neck-item">
                    <span className="home-neck-item-icon"><i className={`mdi mdi-${neck.icon}`}></i></span>
                    <span className="home-neck-item-name">{neck.name}</span>
                  </NavLink>
                )
              }
            </span>
          </div>

          <div className="rooter-container">
            {/* <Route path="/home" component={Introduction} /> */}
            <Route path="/cardbox" component={Cardbox} />
            <Route path="/todo" component={Todo} />
            <Route path="/tomato" component={Tomato} />
             <Route path="/anniversary" component={Anniversary} /> 
          </div>
        </div>

      </Router>

    );
  }
}

export default App;
