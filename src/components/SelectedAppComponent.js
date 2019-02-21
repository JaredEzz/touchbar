import React from "react";
import '../styles/index.scss';

class SelectedApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedApp: this.props.selectedApp
        };
    }

    render() {
        let _selectedApp = this.props.selectedApp;

        let message1 = "You selected " + _selectedApp;

        return (
            <div
                style={{
                    position: 'absolute', left: '50%', top: '10%',
                    transform: 'translate(-50%, 0%)'
                }}
            >
                <h3>App Info State</h3>
                <h3>{message1}</h3>
                <button onClick={() => this.props.handleTransition({type: 'BACK'})}>go back</button>
            </div>
        );
    }
}

export default SelectedApp;