import React, { Component } from 'react';
import '../styles/App.css';

import Search from './SearchComponent'
import Comparison from './ComparisonComponent'
import SelectedApp from './SelectedAppComponent'

// import route Components here
import {
    BrowserRouter as Router,
    Route, Link, Switch, Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
      return (
          <Router>
              <div className="App">
                  <div className="container">
                      {/*header bar*/}
                      <nav>
                          <div className="nav-wrapper">
                              <ul className="left hide-on-med-and-down nav">
                                  <li className="nav"><Link to="/search">Home</Link></li>

                              </ul>
                              <ul className="right hide-on-med-only nav">
                                  <li className="nav"><Link to="/compare">Compare MacBook Prices</Link></li>
                              </ul>
                          </div>
                      </nav>
                      {/* Routes go here */}
                      <Redirect exact={true} from={"/"} to={"/search"}/>
                      <Route path={"/search"} component={Search}/>
                      <Route path={"/compare"} component={Comparison}/>
                      <Route path={"/app"} component={SelectedApp}/>
                  </div>
              </div>
          </Router>
      );
  }
}
export default App;