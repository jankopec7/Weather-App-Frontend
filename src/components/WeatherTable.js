import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCell from './WeatherCell';
import './WeatherTable.css';

function WeatherTable() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            
            const url = `http://localhost:8080/weather?latitude=${latitude}&longitude=${longitude}&_=${Date.now()}`;
            const response = await axios.get(url);
            console.log(response.data);
            setWeatherData(Array.isArray(response.data) ? response.data : [response.data]);
        });
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Weather Icon</th>
                    <th>Min.temp.[°C]</th>
                    <th>Max. temp.[°C]</th>
                    <th>Energy generated [kWh]</th>
                </tr>
            </thead>
            <tbody>
                {weatherData.map((day) => (
                    <WeatherCell key={day.date} day={day} />
                ))}
            </tbody>
        </table>
    );
}

export default WeatherTable;