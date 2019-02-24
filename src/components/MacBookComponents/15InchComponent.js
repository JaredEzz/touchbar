import React from 'react';
import * as M from "materialize-css";


const Fifteen = () => {
    M.Toast.dismissAll();
    return (
      <div
          style={{
              position: 'absolute', left: '50%', top: '10%',
              transform: 'translate(-50%, 0%)'
          }}>
          <h3 className="display-3">13-Inch MacBook Pro</h3>
          <div className="left">
          </div>
      </div>
    );
}

export default Fifteen;