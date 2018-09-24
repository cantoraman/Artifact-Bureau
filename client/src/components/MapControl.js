import React,  { createRef, Component } from 'react';
import { Map, Marker, Popup, TileLayer, Icon } from 'react-leaflet'
import Leaflet from 'leaflet'
const API_KEY = require('../helpers/api_key.js');

const MapControl = (props) => {

  let mapRef = createRef()

  function renderMarker(){
    const image = new Leaflet.Icon({
     iconUrl: require('../helpers/radar3.gif'),
     iconSize:     [100, 100],
     iconAnchor:   [50, 50],
    });

    if(props.markered)
    {
      return (<Marker
        icon= {image}
        position={props.markerCoordinates}
      />)
    }
  }

  function handleClick(evt){
    props.onMapClicked(evt.latlng);
  }

    return(
      <Map
        className="map-container"
        center={props.viewedLocation}
        zoom={props.zoom}
        ref={this.mapRef}
        onClick={handleClick}
        >
        {renderMarker()}

        <TileLayer
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org;>OpenStreetMap</a> contributors "
          id= 'mapbox.streets'

          accessToken= {API_KEY}
        />
      </Map>
    );



}



export default MapControl;
