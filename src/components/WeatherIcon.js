import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faCloudShowersHeavy, faSnowflake, faBolt } from '@fortawesome/free-solid-svg-icons';

function WeatherIcon({ code }) {
    // Map the weather code to the corresponding icon
    const iconMap = {
        '0': faSun,
        '1': faSun,
        '2': faCloud,
        '3': faCloud,
        '45': faCloud, //fog
        '48': faCloud, //fog
        '51': faCloudRain,
        '53': faCloudRain,
        '55': faCloudRain,
        '56': faCloudShowersHeavy,
        '57': faCloudShowersHeavy,
        '61': faCloudRain,
        '63': faCloudRain,
        '65': faCloudRain,
        '66': faCloudShowersHeavy,
        '67': faCloudShowersHeavy,
        '71': faSnowflake,
        '73': faSnowflake,
        '75': faSnowflake,
        '77': faSnowflake,
        '80': faCloudShowersHeavy,
        '81': faCloudShowersHeavy,
        '82': faCloudShowersHeavy,
        '85': faSnowflake,
        '86': faSnowflake,
        '95': faBolt,
        '96': faBolt,
        '99': faBolt,
    };

    const icon = iconMap[code];

    return <FontAwesomeIcon icon={icon} />;
}

export default WeatherIcon;