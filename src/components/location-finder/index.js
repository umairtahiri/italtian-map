import React, { useState } from "react";
import LeafMap from "../map";

import "./styles.scss";

const LocationFinder = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="location-finder-container">
      <div className="input-container">
        <input
          className="input"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Search area"
        />
      </div>
      <LeafMap />
    </div>
  );
};

export default LocationFinder;
