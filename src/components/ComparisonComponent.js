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
                <h3>Looking to buy a MacBook Pro?</h3>
                <h5 className="center">Select a size for more details.</h5>
                <div className="row">
                    <img
                        width="840" height="440" alt="13 Inch MacBook Pro"
                        className="rounded"
                        src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/MacBookModels.png"} />
                </div>
            </div>
        );
    }
}

export default Comparison;