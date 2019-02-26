import React from "react";
import Suggestion from "./SuggestionComponent";
import * as M from "materialize-css";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            apps: [],
            selectedApp: "",
            addSuggestion: false
        };
        this.handleChange = this.handleChange.bind(this);
        // this.turnOnSuggestion = this.turnOnSuggestion.bind(this);
        //not needed because using arrow function below
        M.Toast.dismissAll();
    }

    componentDidMount() {
        this.setState({
            apps: apps
        });
        this.refs.search.focus();
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value,
            selectedApp: ""
        });
        if (this.refs.search.value === "") {
            this.setState({
                addSuggestion: false
            })
        }
    }

    handleClick(item) {
        this.setState({
            selectedApp: item.name
        });
        let pathAddend;
        if (item.name.toLowerCase().split(" ").length > 1){
            if (item.name.toLowerCase().split(" ")[1] === "pro") {
                pathAddend = item.name.toLowerCase().split(" ")[0];
            } else {
                pathAddend = item.name.toLowerCase().split(" ")[1];
            }
        } else {
            pathAddend = item.name.toLowerCase();
        }
        let itemPath = `/app/${pathAddend}`;
        this.props.history.push(itemPath);
    };

    turnOnSuggestion() {
        this.props.history.push(`/suggestion`);
    }

    goToCompare(){
        this.props.handleCompareSelect();
    }

    render() {
        let _apps = this.state.apps;
        let search = this.state.searchString.trim().toLowerCase();
        let _showSuggestOption = false;
        let _selectedApp = this.state.selectedApp;
        let _addSuggestion = this.state.addSuggestion;

        if (search.length === 0) {
            _apps = [];
            _showSuggestOption = false;
        }

        if (search.length > 0) {
            _apps = _apps.filter(function(app) {
                return app.name.toLowerCase().match(search);
            });
            _showSuggestOption = true;
        }

        return (
            <div
                style={{
                    position: 'absolute', left: '50%', top: '10%',
                    transform: 'translate(-50%, 0%)'
                }}
            >
                <h3>What can I do with Touch Bar?</h3>
                <div>
                    <input
                        id="search"
                        type="text"
                        value={this.state.searchString}
                        ref="search"
                        onChange={this.handleChange}
                        placeholder="type your application's name here"
                    />
                    <ul className="search">
                        {_apps.map(item =>
                            <li datatype={item.name} onClick={() => this.handleClick(item)}>
                                {item.name}</li>
                        )}
                    </ul>
                    <h4 onClick={() => this.turnOnSuggestion()}>{_showSuggestOption ? _addSuggestion ? "" : "Don't see your app here? Suggest an addition." : ""}</h4>
                    <h5>{_addSuggestion ? "" : _selectedApp}</h5>
                    {/*TODO build functionality from selected app*/}
                    {_addSuggestion ? <Suggestion/> : null}
                </div>
            </div>
        );
    }
}

export default Search;

let apps = [
    {
        name: "Spotify"
    },
    {
        name: "Safari"
    },
    {
        name: "Finder"
    },
    {
        name: "QuickTime"
    },
    {
        name: "Mozilla Firefox"
    },
    {
        name: "Adobe Photoshop"
    },
    {
        name: "Microsoft Excel"
    },
    {
        name: "Evernote"
    },
    {
        name: "Final Cut Pro X"
    },
    {
        name: "Microsoft Powerpoint"
    },
    {
        name: "Microsoft Word"
    },
    {
        name: "Microsoft Outlook"
    },
    {
        name: "1Password"
    },
    {
        name: "Sketch"
    },
    {
        name: "PCalc"
    },
    {
        name: "Messages"
    },
    {
        name: "djay Pro"
    },
    {
        name: "PDF Expert"
    },
    {
        name: "Pixelmator"
    },
    {
        name: "Fantastical 2"
    },
    {
        name: "Google Chrome"
    },
    {
        name: "Steam"
    },
    {
        name: "Adobe Illustrator"
    },
    {
        name: "App Store"
    },
    {
        name: "VLC"
    },
    {
        name: "Google Drive"
    },
    {
        name: "IntelliJ IDEA"
    }
];


