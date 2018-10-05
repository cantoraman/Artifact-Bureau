import React from 'react';
import IntelligenceOffice from "./IntelligenceOffice";
import ServerRoom from "./ServerRoom";
import TerminalSelector from '../components/TerminalSelector';
import { BrowserRouter as Router, Route } from "react-router-dom";


class MainTerminal extends React.Component{

  render() {
      return (
        <Router>
          <React.Fragment>
            <Route exact path="/" component={TerminalSelector} />
            <Route path="/server-room" component={ServerRoom} />
            <Route path="/intelligence-office" component={IntelligenceOffice} />
          </React.Fragment>
        </Router>
      )
    }

}

export default MainTerminal;
