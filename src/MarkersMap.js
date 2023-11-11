import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useCurrentLocation from './useCurrentLocation';

const MarkersMap = () => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const ZOOM_LEVEL = 13;
  const mapRef = useRef();
  const location = useCurrentLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      const currentMap = mapRef.current;

      if (currentMap) {
        currentMap.flyTo(
          [location.coordinates.lat, location.coordinates.lng],
          ZOOM_LEVEL,
          { animate: true }
        );
      } else {
        console.error('Leaflet map not available yet.');
      }
    } else {
      alert(location.error.message);
    }
  };

  useEffect(() => {
    if (location.loaded && !location.error) {
      setCenter(location.coordinates);
    }
  }, [location]);

  const markerIcon = new L.Icon({
    iconUrl: require('./marker.png'),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>React-Leaflet - Locate My Location</h2>
          <div className="col">
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={center} icon={markerIcon}>
                <Popup>Your Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" onClick={showMyLocation}>
            Locate Me
          </button>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;
