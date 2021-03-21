/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import autocomplete from "autocompleter";

import Loader from "../../image/Spinner-3.gif";

import LeafMap from "../map";

import "./styles.scss";

const LocationFinder = () => {
  const provider = new OpenStreetMapProvider({
    params: {
      countrycodes: "IT",
    },
  });
  const [startSearch, setStartSearch] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [placeForDetails, setPlaceForDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const getResults = async (str) => {
    setStartSearch(false);
    setLoading(true);
    const places = await provider.search({ query: str });
    const formattedPlaces = places.map((p) => ({
      label: p?.label,
      value: JSON.stringify(p),
    }));
    places && setLoading(false);
    return formattedPlaces;
  };

  useEffect(() => {
    var input = document.getElementById("places-input");

    autocomplete({
      input: input,
      fetch: async (text, update) => {
        const places = (await getResults(text)) || [];
        update(places);
      },
      onSelect: (place) => {
        const info = place && JSON.parse(place.value);
        setSelectedPlace(place);
        setPlaceForDetails(info);
        input.value = place.label;
      },
    });
  }, [startSearch]);

  return (
    <div className="location-finder-container">
      <div className="input-container">
        <input id="places-input" className="input" placeholder="Search area" />
        <div className="loader-container">
          {loading && <img className="loader" src={Loader} alt="" />}
        </div>
      </div>
      <LeafMap place={selectedPlace} />
      {placeForDetails && (
        <section className="area-details-container">
          <div className="row">
            <div className="title">Place Name</div>
            <div className="description">{placeForDetails.label}</div>
          </div>
          <div className="row">
            <div className="title">Coordinates</div>
            <div className="description">{`lat: ${placeForDetails.raw.lat}, lon: ${placeForDetails.raw.lon}`}</div>
          </div>
          <div className="row">
            <div className="title">Place Type</div>
            <div className="description">{placeForDetails.raw.type}</div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LocationFinder;
