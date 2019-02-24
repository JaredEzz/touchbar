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

                <div id="macbooks">
                    <div className="img-with-text13">
                        <img
                            onClick={() => this.props.history.push("/compare/thirteen")}
                            width="232" height="161" alt="13 Inch MacBook Pro"
                            className="link"
                            src={"https://www.apple.com/v/macbook-pro/t/images/shared/compare13_large_2x.png"}/>
                        <h5 className="center" onClick={() => this.props.history.push("/compare/thirteen")}>13-inch</h5>
                    </div>
                    <div className="img-with-text15">
                        <img
                            onClick={() => this.props.history.push("/compare/fifteen")}
                            width="271" height="161" alt="15 Inch MacBook Pro"
                            className="link"
                            src={"https://www.apple.com/v/macbook-pro/t/images/shared/compare15_touchbar_large_2x.png"}/>
                        <h5 className="center" onClick={() => this.props.history.push("/compare/fifteen")}>15-inch</h5>
                    </div>
                 </div>
            </div>
        );
    }
}

export default Comparison;