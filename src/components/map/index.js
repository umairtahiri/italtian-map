/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import "./styles.scss";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafMap = (props) => {
  const { place } = props;
  const [map, setMap] = useState({});

  console.log({ place });

  const getPosition = () => {
    if (place) {
      const selectedPlace = JSON.parse(place?.value) || {};
      const lat = selectedPlace?.y || selectedPlace?.lat;
      const lon = selectedPlace?.x || selectedPlace?.lon;
      return [lat, lon];
    } else return [41.902782, 12.496366];
  };

  const changePos = () => {
    const position = getPosition();
    if (map) map.flyTo && map.flyTo(position);
  };

  useEffect(() => {
    changePos();
  }, [place]);

  const renderMap = useMemo(() => {
    const position = getPosition();
    return (
      <MapContainer
        className="markercluster-map"
        center={position}
        zoom={12}
        maxZoom={18}
        scrollWheelZoom={false}
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          // icon={new L.Icon.Default()}
        >
          <Popup>{place?.label || "Rome"}</Popup>
        </Marker>
      </MapContainer>
    );
  }, [place]);

  return <div className="map-size">{renderMap}</div>;
};

export default LeafMap;
