import React from 'react';
import './App.css';
import WeatherTable from './components/WeatherTable';

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App for Codibly</h1>
        <WeatherTable />
      </header>
      <footer className="App-footer">
        <p>&copy; {year} Jan Kopeć</p>
      </footer>
    </div>
  );
}

export default App;