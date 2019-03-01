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
import Excel from "./AppComponents/Excel";
import Quicktime from "./AppComponents/Quicktime";
import Safari from "./AppComponents/Safari";
import AppStore from "./AppComponents/Apple";
import Chrome from "./AppComponents/Chrome";
import djayPro from "./AppComponents/djayPro";
import Evernote from "./AppComponents/Evernote";
import Fantastical from "./AppComponents/Fantastical2";
import FinalCutPro from "./AppComponents/FinalCutPro";
import Finder from "./AppComponents/Finder";
import Illustrator from "./AppComponents/Illustrator";
import Messages from "./AppComponents/Messages";
import OnePassword from "./AppComponents/OnePassword";
import Outlook from "./AppComponents/Outlook";
import PDFExpert from "./AppComponents/PdfExpert";
import Photoshop from "./AppComponents/Photoshop";
import Pixelmator from "./AppComponents/Pixelmator";
import Powerpoint from "./AppComponents/Powerpoint";
import Sketch from "./AppComponents/Sketch";
import Steam from "./AppComponents/Steam";
import VLC from "./AppComponents/VLC";
import Word from "./AppComponents/Word";

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
                      {/*Singular App Paths*/}
                      <Route exact={true} path={"/app"} component={SelectedApp}/>
                      <Route path={"/app/store"} component={AppStore}/>
                      <Route path={"/app/chrome"} component={Chrome}/>
                      <Route path={"/app/djay"} component={djayPro}/>
                      <Route path={"/app/evernote"} component={Evernote}/>
                      <Route path={"/app/excel"} component={Excel}/>
                      <Route path={"/app/fantastical"} component={Fantastical}/>
                      <Route path={"/app/cut"} component={FinalCutPro}/>
                      <Route path={"/app/finder"} component={Finder}/>
                      <Route path={"/app/firefox"} component={Firefox}/>
                      <Route path={"/app/idea"} component={IDEA}/>
                      <Route path={"/app/illustrator"} component={Illustrator}/>
                      <Route path={"/app/messages"} component={Messages}/>
                      <Route path={"/app/1password"} component={OnePassword}/>
                      <Route path={"/app/outlook"} component={Outlook}/>
                      <Route path={"/app/expert"} component={PDFExpert}/>
                      <Route path={"/app/photoshop"} component={Photoshop}/>
                      <Route path={"/app/pixelmator"} component={Pixelmator}/>
                      <Route path={"/app/powerpoint"} component={Powerpoint}/>
                      <Route path={"/app/quicktime"} component={Quicktime}/>
                      <Route path={"/app/safari"} component={Safari}/>
                      <Route path={"/app/sketch"} component={Sketch}/>
                      <Route path={"/app/spotify"} component={Spotify}/>
                      <Route path={"/app/steam"} component={Steam}/>
                      <Route path={"/app/vlc"} component={VLC}/>
                      <Route path={"/app/word"} component={Word}/>
                  </div>
              </div>
          </Router>
      );
  }
}
export default App;