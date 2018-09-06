import React,  { createRef, Component } from 'react';
import { Map, Marker, Popup, TileLayer, Icon } from 'react-leaflet'
import Leaflet from 'leaflet'
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
  const image = new Leaflet.Icon({
               iconUrl: require('../helpers/radar.gif'),
               iconSize:     [100, 100],
               iconAnchor:   [50, 50],
           });
    if(this.state.markered)
    return (<Marker
      icon= {image}
      position={this.state.markerCoordinates}  /> )
  };




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
