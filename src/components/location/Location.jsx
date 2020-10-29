import React from "react";
import "./Location.scss";
import GoogleMapReact from "google-map-react";

function Location() {
  return (
    <div className="location">
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={{ lat: 26.8358, lng: 30.7957 }}
        defaultZoom={8}
      ></GoogleMapReact>
    </div>
  );
}

export default Location;
