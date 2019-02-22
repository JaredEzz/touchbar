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
          <h3 className="display-3">About Me</h3>
          <div className="left">
          <a href="mailto:jaredhasson@byu.net?Subject=Touchbar%20App%20Feedback" target="_blank">Email Me</a>
          </div>
      </div>
    );
}

export default About;