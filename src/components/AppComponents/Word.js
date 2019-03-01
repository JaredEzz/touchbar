import React from 'react';
import * as M from "materialize-css";
import {Link} from "react-router-dom";

const Word = () => {
    M.Toast.dismissAll();
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '10%',
                transform: 'translate(-50%, 0%)'
            }}>
            <h3 className="display-3">Microsoft Word</h3>
            <br/>
                <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/screenshots/quicktimewithlabels.png"}
                     width="1245"
                     alt={"Microsoft Word Touchbar"}/>
        </div>
    );
};

export default Word;