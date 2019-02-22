import React, { Component } from 'react';
import '../styles/App.css';

import Search from './SearchComponent'
import Comparison from './ComparisonComponent'
import SelectedApp from './SelectedAppComponent'
import Suggestion from "./SuggestionComponent";
import About from "./AboutComponent";

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
                      {/*
                      TODO add
                      https://codepen.io/jorgecardoso/embed/oBQyZZ?height=465&theme-id=0&slug-hash=oBQyZZ&default-tab=css%2Cresult&embed-version=2&user=jorgecardoso
                      instead of header bar*/}
                      <nav>
                          <div className="nav-wrapper">
                              <ul className="left hide-on-med-and-down nav">
                                  <li className="nav"><Link to="/search">Home</Link></li>
                                  <li className="nav"><Link to="/suggestion">Make a Suggestion</Link></li>
                                  {/*Test links for development go here*/}
                              </ul>
                              <ul className="right hide-on-med-only nav">
                                  <li className="nav"><Link to="/compare">Compare MacBook Prices</Link></li>
                                  <li className="nav"><Link to="/about">About</Link></li>
                              </ul>
                          </div>
                      </nav>
                      {/* Routes go here */}
                      <Redirect exact={true} from={"/"} to={"/search"}/>
                      <Route path={"/search"} component={Search}/>
                      <Route path={"/compare"} component={Comparison}/>
                      <Route path={"/app"} component={SelectedApp}/>
                      <Route path={"/suggestion"} component={Suggestion}/>
                      <Route path={"/about"} component={About}/>

                  </div>
              </div>
          </Router>
      );
  }
}
export default App;