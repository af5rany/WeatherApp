import React from "react";

function WeatherDisplay({ weather }) {
  return (
    <div>
      <h1>{weather.name}</h1>
      <p>{weather.weather[0].description}</p>
      <p>{(weather.main.temp - 273.15).toFixed(2)}°C</p>
    </div>
  );
}

export default WeatherDisplay;
