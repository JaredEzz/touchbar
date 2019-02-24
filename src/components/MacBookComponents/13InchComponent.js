import React from 'react';
import * as M from "materialize-css";
import {
    BrowserRouter as Router,
    Route, Link, Switch, Redirect
} from 'react-router-dom';

const Thirteen = () => {
    M.Toast.dismissAll();
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '10%',
                transform: 'translate(-50%, 0%)'
            }}>
            <h3 className="display-3">13-inch MacBook Pro Models</h3>
            <a href="https://www.apple.com/hk/shop/buy-mac/macbook-pro/13-inch">
            <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/thirteendetails.png"}
                 width="1159.7" height="649.6"
                 alt={"13 inch macbook options and prices"}
                 href="https://www.apple.com/hk/shop/buy-mac/macbook-pro/13-inch"/></a>
            <div className="left">
                <Link className="header_link" to={"/compare/fifteen"}>See 15-inch Models</Link>
            </div>
        </div>
    );
}

export default Thirteen;