import React from "react";
import {Link} from "react-router-dom";

class Comparison extends React.Component {
    constructor(props) {
        super(props);

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
                <h5>{<Link to="/search">Go Back</Link>}</h5>
                <button className="left btn" onClick={this.props.history.goBack}>Go Back</button>
            </div>
        );
    }
}

export default Comparison;