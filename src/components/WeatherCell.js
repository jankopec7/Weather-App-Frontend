import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherCell({ day }) {
    return (
        <tr>
            <td>{day.date}</td>
            <td>
                <WeatherIcon code={day.weatherCode} />
            </td>
            <td>{day.minTemp}</td>
            <td>{day.maxTemp}</td>
            <td>{day.energyProduced}</td>
        </tr>
    );
}

export default WeatherCell;