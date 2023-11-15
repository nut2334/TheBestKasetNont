import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGeoLocation from "../hooks/useGeoLocation";

const markerIcon = new L.Icon({
  iconUrl: require("../assets/marker-icon.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MarkersMap = () => {
  const [center] = useState({ lat: 0, lng: 0 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  const location = useGeoLocation();

  const showMyLocation = () => {
    console.log("location", location);
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <div className="col">
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: '500px', width: '100%' }}>
                      <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              {location.loaded && !location.error && (
                <Marker
                  icon={markerIcon}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                ></Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" onClick={showMyLocation}>
            Locate Me <FontAwesomeIcon icon="globe" />
          </button>
          {
            <p className="text-success ms-3">
              My location is: {location.coordinates.lat} {location.coordinates.lng}
            </p>
          }
        </div>
      </div>
    </>
  );
};

export default MarkersMap;