import React from 'react';
import * as M from "materialize-css";
import {
    BrowserRouter as Router,
    Route, Link, Switch, Redirect
} from 'react-router-dom';


const Fifteen = () => {
    M.Toast.dismissAll();
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '10%',
                transform: 'translate(-50%, 0%)'
            }}>
            <h3 className="display-3">15-inch MacBook Pro Models</h3>
            <a href="https://www.apple.com/hk/shop/buy-mac/macbook-pro/13-inch">
            <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/fifteendetails.png"}
                 width="900" height="649.6"
                 alt={"15 inch macbook options and prices"}/></a>
            <div className="left">
                <Link className="header_link" to={"/compare/thirteen"}>See 13-inch Models</Link>
            </div>
        </div>
    );
}

export default Fifteen;