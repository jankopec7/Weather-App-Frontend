import React, { useState,useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import WeatherTable from './components/WeatherTable';
import LocationPicker from './components/LocationPicker';

function App() {
  const [location, setLocation] = useState(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App for Codibly</h1>
      </header>
      <p>Select a location on the map to retrieve a 7-day weather forecast</p>
      <div className="App-content">
        <LocationPicker setLocation={setLocation} />
        <WeatherTable location={location} />
      </div>
      <p>Current location: {location ? `Lat: ${location.lat}, Lng: ${location.lng}` : 'Not selected'}</p>
      <footer className="App-footer">
        <p>&copy; {year} Jan Kopeć</p>
      </footer>
    </div>
  );
}

export default App;