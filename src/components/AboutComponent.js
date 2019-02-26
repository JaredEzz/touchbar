import React from 'react';
import * as M from "materialize-css";

const About = () => {
    M.Toast.dismissAll();
    return (
      <div
          style={{
              position: 'absolute', left: '50%', top: '10%',
              transform: 'translate(-50%, 0%)'
          }}>
          <h3 className="display-3">About</h3>
          <div className="left">
              <p className="left-align" style={{color: 'white'}}>On October 27, 2016, Apple released the fourth generation of their MacBook Pro laptops.
                  All except the baseline 13-inch model included the TouchBar, a revolutionary new way to interact with the operating system, or so Apple thought.
                    While a touch-screen OLED strip built into the device directly above the keyboard was a great idea in theory, developers were slow to implement
                    features into their applications to utilize the TouchBar's unique functionality.</p>
              <br/>
              <p className="left-align" style={{color: 'white'}}>This website includes a list of popular apps among MacBook users,
                  describes the ways TouchBar can be used to increase productivity, and also provides a side-by-side comparison of
                  MacBook models for those who are considering a purchase but are unsure whether the addition of a TouchBar will be
                  worth the increased cost.</p>
              <br/>
              <p className="left-align" style={{color: 'white'}}>Feel free to contact me with suggestions, bugs you've found, or simply
                  your thoughts on the addition of TouchBar and how useful it is to you. Thanks!</p>
              <br/>
              <a href="mailto:jaredhasson@byu.net?Subject=Touchbar%20App%20Feedback" target="_blank"><button className="left spaced waves-effect waves-light btn">Email Me</button></a>
          </div>
      </div>
    );
}

export default About;