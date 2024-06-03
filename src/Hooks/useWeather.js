import { useState, useEffect } from "react";

function useWeather(location) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch weather data");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [location]);

  return { weather, loading, error, fetchWeather };
}

export default useWeather;
