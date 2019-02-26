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
import Thirteen from "./MacBookComponents/13InchComponent";
import Fifteen from "./MacBookComponents/15InchComponent";
import Spotify from "./AppComponents/Spotify";
import Firefox from "./AppComponents/Firefox";
import IDEA from "./AppComponents/IDEA";

class App extends Component {
  render() {
      return (
          <Router basename={process.env.PUBLIC_URL}>
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
                                  <li className="nav"><Link to="/compare">Compare MacBook Models</Link></li>
                                  <li className="nav"><Link to="/about">About</Link></li>
                              </ul>
                          </div>
                      </nav>
                      {/* Routes go here */}
                      {/*<Redirect exact={true} from={"/"} to={"/search"}/>*/}
                      <Route exact={true} path={"/"} component={Search}/>
                      <Route path={"/search"} component={Search}/>
                      <Route exact={true} path={"/compare"} component={Comparison}/>
                      <Route exact={true} path={"/compare/thirteen"} component={Thirteen}/>
                      <Route exact={true} path={"/compare/fifteen"} component={Fifteen}/>
                      <Route path={"/suggestion"} component={Suggestion}/>
                      <Route path={"/about"} component={About}/>
                      <Route exact={true} path={"/app"} component={SelectedApp}/>
                      <Route path={"/app/spotify"} component={Spotify}/>
                      <Route path={"/app/firefox"} component={Firefox}/>
                      <Route path={"/app/idea"} component={IDEA}/>

                  </div>
              </div>
          </Router>
      );
  }
}
export default App;