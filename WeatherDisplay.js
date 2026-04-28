import React from 'react';
function WeatherDisplay({ weather }) {
 return (
 <div>
 <h2>Current Weather in {weather.name}</h2>
 <p>Temperature: {weather.main.temp} °C</p>
 <p>Humidity: {weather.main.humidity}%</p>
 <p>Condition: {weather.weather[0].description}</p>
 </div>
 );
}
export default WeatherDisplay;