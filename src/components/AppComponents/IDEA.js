import React from 'react';
import * as M from "materialize-css";
import {Link} from "react-router-dom";

const IDEA = () => {
    M.Toast.dismissAll();
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '10%',
                transform: 'translate(-50%, 0%)'
            }}>
            <h3 className="display-3">IntelliJ IDEA</h3>
            <a href="https://www.jetbrains.com/help/idea/touch-bar-support.html">
                <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/fifteendetails.png"}
                     width="900" height="649.6"
                     alt={"15 inch macbook options and prices"}/></a>
        </div>
    );
}

export default IDEA;