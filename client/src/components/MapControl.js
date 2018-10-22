import React,  { createRef, Component } from 'react';
import { Map, Marker, Popup, TileLayer, Icon } from 'react-leaflet'
import Leaflet from 'leaflet'
const API_KEY = require('../helpers/api_key.js');

const MapControl = (props) => {

  let mapRef = createRef()

  function renderMarker(){

    const newSize = Math.min(100, Math.max(50, props.zoom*8.33+16.7));

    const image = new Leaflet.Icon({
     iconUrl: require('../helpers/radar3.gif'),
     iconSize:     [newSize, newSize],
     iconAnchor:   [newSize/2, newSize/2],
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

  function onViewportChanged (evt){
    props.viewportChanged(evt.zoom)
   }

    return(
      <div className="map-container">
        <Map
          center={props.viewedLocation}
          zoom={props.zoom}
          ref={this.mapRef}
          onViewportChange={onViewportChanged}
          onClick={handleClick}>
          {renderMarker()}
          <TileLayer
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
            attribution="&copy; <a href=&quot;https://www.openstreetmap.org;>OpenStreetMap</a> contributors "
            id= 'mapbox.streets'

            accessToken= {API_KEY}
          />
        </Map>
      </div>
    );
}



export default MapControl;
