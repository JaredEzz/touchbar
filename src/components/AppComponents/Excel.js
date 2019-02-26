import React from 'react';
import * as M from "materialize-css";
import {Link} from "react-router-dom";

const Excel = () => {
    M.Toast.dismissAll();
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '10%',
                transform: 'translate(-50%, 0%)'
            }}>
            <h3 className="display-3">Microsoft Excel</h3>
            <a href="https://www.jetbrains.com/help/idea/touch-bar-support.html">
                <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/screenshots/excelwithlabels.png"}
                     width="1245" height="130"
                     alt={"Microsoft Excel Touchbar"}/></a>
        </div>
    );
}

export default Excel;