import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./styles.scss";

const LeafMap = () => {
  return (
    <div className="map-size">
      <MapContainer
        className="markercluster-map"
        center={[51.0, 19.0]}
        zoom={12}
        maxZoom={18}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default LeafMap;
