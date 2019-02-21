import React from "react";

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
                <button onClick={() => this.props.handleTransition({type: 'BACK'})}>go back</button>
            </div>
        );
    }
}

export default Comparison;