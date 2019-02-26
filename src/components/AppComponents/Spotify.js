import React from 'react';
import * as M from "materialize-css";
import {Link} from "react-router-dom";

const Spotify = () => {
    M.Toast.dismissAll();
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '10%',
                transform: 'translate(-50%, 0%)'
            }}>
             <h3 className="display-3">Spotify</h3>
            <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/screenshots/spotify1.png"}
                 width="1160" height="32"
                 alt={"Spotify play options"}/>
            <p className="left-align" style={{color: 'white'}}>When in the app, Spotify provides navigation and audio controls in the TouchBar.
                Users are able to go backward or forward in the Spotify app, search for songs, toggle shuffle or repeat, pause/play, skip
                to the next song or go to the previous song, and control volume independent of the system default Touch Bar settings. </p>
             <img src={"https://raw.githubusercontent.com/JaredEzz/touchbar/master/res/screenshots/spotify2.png"}
                 width="1160" height="32"
                 alt={"Spotify scrubbing options"}/>
            <p className="left-align" style={{color: 'white'}}>While the Spotify app is active in the background, selecting the audio button
                in the control strip will bring up this audio scrubber. This allows you to pause/play, fast forward or rewind, and accurately
                navigate anywhere in the audio track.</p>

        </div>
    );
}

export default Spotify;