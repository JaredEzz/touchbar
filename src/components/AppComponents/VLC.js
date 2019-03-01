import React from 'react';
import * as M from "materialize-css";
import {Link} from "react-router-dom";

const VLC = () => {
    M.Toast.dismissAll();
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '10%',
                transform: 'translate(-50%, 0%)'
            }}>
            <h3 className="display-3">VLC</h3>
            <br/>
            <div className="left blurb">
                <h5>Currently, VLC Media Player does not support TouchBar. When you use VLC, your Touch Bar will resemble the default as shown here.</h5>
            </div>
            <br/>
            <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/screenshots/default.png"}
                 width="1245" height="34"
                 alt={"Default Empty Touchbar"}/>
        </div>
    );
};

export default VLC;