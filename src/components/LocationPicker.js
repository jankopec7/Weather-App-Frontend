import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

function LocationMarker({ setLocation }) {
  const map = useMapEvents({
    click(e) {
      setLocation(e.latlng);
    },
  });

  return null;
}

function LocationPicker({ setLocation, location }) {
  return (
    <div style={{ height: "300px", width: "100%" }}>
      <MapContainer center={location || [50.0614, 19.9366]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker setLocation={setLocation} />
      </MapContainer>
    </div>
  );
}

export default LocationPicker;