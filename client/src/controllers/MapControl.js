import React,  { createRef, Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
const API_KEY = require('../helpers/api_key.js');

class MapControl extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentLocation : null,
      markered : false,
      markerCoordinates: [],
      scanned : false
    }
    this.renderMarker = this.renderMarker.bind(this);
  }

  mapRef = createRef()

  handleClick = (event) => {
    if(!this.state.markered){
      this.setState({
      markered:true,
      markerCoordinates: [event.latlng.lat, event.latlng.lng]
      })
    }
    else{
      this.setState({
      markerCoordinates: [event.latlng.lat, event.latlng.lng]
      })
    }
    }

  renderMarker(){
    if(this.state.markered)
    return (<Marker position={this.state.markerCoordinates}  /> )
  }

  render(){


    return(
      <Map
        className="map-container"
        center={this.props.viewedLocation}
        zoom={12}
        ref={this.mapRef}
        onClick={this.handleClick}
        >
        {this.renderMarker()}
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
