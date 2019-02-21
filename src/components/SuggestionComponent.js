import React from "react";

class Suggestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestionMade: false
        };
    }


    handleSuggestion() {
        this.setState({
            suggestionMade: true
        })
    }

    render() {
        let _suggestionMade = this.state.suggestionMade;

        return (
            <div>
                <div class="row">
                    <h6>Type your application's name above and submit when ready</h6>
                </div>
                <div class="row">
                    <button class="waves-effect waves-light btn" onClick={() => this.handleSuggestion()} disabled={_suggestionMade}>Submit Suggestion</button>
                    <h5>{_suggestionMade? "Suggestion Submitted - Thank You!" : ""}</h5>
                </div>

            </div>
        );
    }
}

export default Suggestion