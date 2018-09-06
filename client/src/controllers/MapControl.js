import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
const API_KEY = require('../helpers/api_key.js');

class MapControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentLocation : null
    }
  }


  render(){


    return(
      <Map className="map-container" center={this.props.viewedLocation} zoom={12}>
        <TileLayer
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org;>OpenStreetMap</a> contributors "
          id= 'mapbox.streets'
          accessToken= {API_KEY}
        />
      </Map>
    );

  }

}



export default MapControl;
