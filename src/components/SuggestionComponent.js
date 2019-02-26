import React from "react";
import {
    BrowserRouter as Router,
    Route, Link, Switch, Redirect
} from 'react-router-dom';
import Search from "./SearchComponent";
import * as M from "materialize-css";

class Suggestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestionMade: false,
            suggestionEmpty: true,
            buttonTried: false
        };
    }

    handleChange(){
        this.setState({
            suggestionString: this.refs.suggest.value,
            suggestionMade: true
        });
    }

    handleSuggestion() {
        this.setState({
            suggestionMade: true
        });
        let toastHTML = '<span>Suggestion Submitted, Thanks!</span>';
        M.toast({html: toastHTML});
    }

    handleAnother() {
        this.setState({
            suggestionMade: false
        });
        M.Toast.dismissAll();
    }

    render() {
        let _suggestionMade = this.state.suggestionMade;
        let _suggestionString = this.state.suggestionString;
        let _suggestionEmpty = (this.state.suggestionString === undefined);
        let _buttonTried = this.state.button;

        return (
            <div
                style={{
                    position: 'absolute', left: '50%', top: '10%',
                    transform: 'translate(-50%, 0%)'
                }}>
                <h3>Have a Suggestion?</h3>
                <input
                    id="suggestion"
                    type="text"
                    value={this.state.suggestionString}
                    ref="suggest"
                    placeholder="Type your application's name and submit when ready"
                onChange={() => this.handleChange}/>
                <div class="row">
                    <button class="left waves-effect waves-light btn" onClick={() => this.handleSuggestion()} disabled={_suggestionMade}>Submit Suggestion</button>

                    {_suggestionMade?<button class="left spaced waves-effect waves-light btn" onClick={() => this.handleAnother()}>Make Another</button>:null}
                </div>
                <div className="row">
                    {/*<h5>{_suggestionMade? "Suggestion Submitted - Thank You!" : ""}</h5>*/}
                    {/*<h5>{_suggestionMade?  <Link to="/search">Go Back</Link> : ""}</h5>*/}
                </div>



            </div>
        );
    }
}

export default Suggestion