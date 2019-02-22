import React from "react";
import {Link} from "react-router-dom";
import * as M from "materialize-css";

class Comparison extends React.Component {
    constructor(props) {
        super(props);
        M.Toast.dismissAll();
    }

    render() {
        return (
            <div
                style={{
                    position: 'absolute', left: '50%', top: '10%',
                    transform: 'translate(-50%, 0%)'
                }}
            >
                <h3>Price Comparison State</h3>
            </div>
        );
    }
}

export default Comparison;