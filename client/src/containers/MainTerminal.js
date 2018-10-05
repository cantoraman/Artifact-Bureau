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
          url: require('../helpers/Rosetta_Stone.JPG'),
          secretMessage: "The most valuable translation device of the history. With this, Egyptian hieroglyphs were deciphered. I am selling this just where it was found.",
          secretPicture: true
        },
        {
          name: "The Crystal Skull",
          location: [41.009, 28.965],
          locationName: "Istanbul",
          lost: true,
          url: require('../helpers/crystal_skull.jpg'),
          secretMessage: "The buyer is very eager to lay his hands on this big chunk of crystal. We will make the trade in the ancient city where two continents meet.",
          secretPicture: false
        },
        {
          name: "Horse of Selene",
          location: [48.208, 16.372],
          locationName: "Vienna",
          lost: true,
          url: require('../helpers/horse_of_Selene.jpg'),
          secretMessage: "This one goes for the highest bidder at the meeting under the opera house. While we are there, I should not miss the Scubert concert.",
          secretPicture: true
        },
        {
          name: "The Sutton Hoo Helmet",
          location: [-27.125, -109.349],
          locationName: "Easter Island",
          lost: true,
          url: require('../helpers/Sutton_hoo_helmet.jpg'),
          secretMessage: "I couldn't sell the helm yet but it is safe under the shadow of Moais",
          secretPicture: false
        },
        {
          name: "The Lewis Chessmen",
          location: [8.925, -79.549],
          locationName: "The Panama Canal",
          lost: true,
          url: require('../helpers/Chessmen.jpg'),
          secretMessage: "The pieces were sold to the player living by the canal that connects the oceans.",
          secretPicture: false
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
