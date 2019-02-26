import React from 'react';
import * as M from "materialize-css";
import {Link} from "react-router-dom";

const Firefox = () => {
    M.Toast.dismissAll();
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '10%',
                transform: 'translate(-50%, 0%)'
            }}>
            <h3 className="display-3">Mozilla Firefox</h3>
            <br/>
            <div className="left blurb">
                <h5>Currently, Mozilla Firefox does not support touch bar. </h5>
            </div>
            <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/screenshots/default.png"}
                 width="1245" height="34"
                 alt={"Default Empty Touchbar"}/>
             <h5>When you use Firefox, your Touch Bar will resemble the default as shown here.
                 However, TouchBar support is planned for version 66 of Firefox. </h5>
            <a href="https://www.mozilla.org/en-US/firefox/66.0beta/releasenotes/"><h4>Visit the release notes page here for more information</h4></a>
        </div>
    );
};

export default Firefox;