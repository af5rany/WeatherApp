import React, { useState } from "react";
import useWeather from "./../Hooks/useWeather";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForm from "./WeatherForm";

// please check [main.js] file as i bundeled the code in a function body and improved it

function WeatherApp() {
  // the app wont work as there is no API Key
  const [location, setLocation] = useState("");
  // I imported fetchWeather to pass it as props to WeatherForm and be able to use it onClick
  const { weather, loading, error, fetchWeather } = useWeather(location);

  const handleInputChange = (e) => {
    //we can use Debounce to reduce API calls
    setLocation(e.target.value);
  };

  return (
    <div>
      <WeatherForm
        location={location}
        onLocationChange={handleInputChange}
        fetchWeather={fetchWeather}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default WeatherApp;
