import React from 'react';
import IntelligenceOffice from "./IntelligenceOffice";
import ServerRoom from "./ServerRoom";
import TerminalSelector from '../components/TerminalSelector';
import { BrowserRouter as Router, Route, PropsRoute } from "react-router-dom";


class MainTerminal extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      artifacts: [
        {
          name: "The Rosetta Stone",
          location: [31.404, 30.416],
          locationName: "Rosetta",
          lost: true,
          url: require('../helpers/Rosetta_Stone.JPG')
        },
        {
          name: "The Crystal Skull",
          location: [41.009, 28.965],
          locationName: "Istanbul",
          lost: true,
          url: require('../helpers/crystal_skull.jpg')
        },
        {
          name: "Horse of Selene",
          location: [48.208, 16.372],
          locationName: "Vienna",
          lost: true,
          url: require('../helpers/horse_of_Selene.jpg')
        },
        {
          name: "The Sutton Hoo Helmet",
          location: [-27.125, -109.349],
          locationName: "Easter Island",
          lost: true,
          url: require('../helpers/Sutton_hoo_helmet.jpg')
        },
        {
          name: "The Lewis Chessmen",
          location: [8.925, -79.549],
          locationName: "The Panama Canal",
          lost: true,
          url: require('../helpers/Chessmen.jpg')
        }
      ]
    }

}

  render() {
      return (
        <Router>
          <React.Fragment>
            <Route exact path="/" component={TerminalSelector} />
            <Route path="/server-room" render={()=><ServerRoom artifacts={this.state.artifacts}/>} />
            <Route path="/intelligence-office" render={()=><IntelligenceOffice artifacts={this.state.artifacts} />}/>
          </React.Fragment>
        </Router>
      )
    }

}

export default MainTerminal;
