import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCell from './WeatherCell';
import './WeatherTable.css';

function WeatherTable({ location }) {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        if (location) {
            const fetchWeatherData = async () => {
                const url = `https://weather-app-zobq.onrender.com/weather?latitude=${location.lat}&longitude=${location.lng}&_=${Date.now()}`;
                const response = await axios.get(url);
                console.log(response.data);
                setWeatherData(Array.isArray(response.data) ? response.data : [response.data]);
            };

            fetchWeatherData();
        }
    }, [location]);

    return (
        <div>
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
        </div>
    );
}

export default WeatherTable;