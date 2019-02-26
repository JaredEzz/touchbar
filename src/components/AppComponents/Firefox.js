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
            <div className="left blurb">
                <h5>Currently, Mozilla Firefox does not support touch bar. When you use Firefox, your Touch Bar will resemble the default as show below.
                However, certain extensions can be downloaded to Firefox to allow additional features, like switching tabs and selecting bookmarks. Visit this link for more updated information.</h5>
            </div>
            <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/screenshots/default.png"}
                 width="1245" height="130"
                 alt={"Default Empty Touchbar"}/>
        </div>
    );
};

export default Firefox;