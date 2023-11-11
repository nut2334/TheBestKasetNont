import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  // Coordinates for the initial map center
  const initialPosition = [13.7563, 100.5018];

  useEffect(() => {
    // You can add additional logic or data fetching here
  }, []);

  return (
    <MapContainer center={initialPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      {/* Add a tile layer for the map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add a marker with a popup */}
      <Marker position={initialPosition}>
        <Popup>
          A sample marker at {initialPosition[0]}, {initialPosition[1]}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;