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
                    <button><img
                        width="100" height="100" alt="13 Inch MacBook Pro"
                        src={"./MacBookModels.png"} /></button>
                </div>
            </div>
        );
    }
}

export default Comparison;