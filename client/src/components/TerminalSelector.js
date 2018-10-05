import React from 'react';
import { Link } from "react-router-dom";

const TerminalSelector = () => (


    <div className="terminal-selector">
      <div className="selection-promps">Please select the role of this terminal...</div>
      <p>___________________</p>
      <Link to ="/server-room">Server Room</Link>
      <p>OR</p>
      <Link to ="/intelligence-office">The Intelligence Office</Link>
    </div>

);


export default TerminalSelector;
