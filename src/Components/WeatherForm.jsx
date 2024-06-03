import React from "react";

function WeatherForm({ location, onLocationChange, fetchWeather }) {
  // the API request will be sent on Input text field change and onSubmit - based on the original Code
  const handleSearch = () => {
    fetchWeather();
  };
  return (
    <>
      <input
        type="text"
        value={location}
        onChange={onLocationChange}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default WeatherForm;
