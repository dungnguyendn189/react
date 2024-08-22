import { useState, useEffect } from "react";
import { convertToFlag } from "./convertToFlag";

export function FetchApi() {
  const [location, setLocation] = useState(
    localStorage.getItem("location") || ""
  );
  const [weather, setWeather] = useState({});
  const [isLoading, setIssloading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState({});

  useEffect(
    function () {
      const controller = new AbortController();
      if (location.length < 2) return setWeather({});

      const fetchWeather = async () => {
        try {
          setIssloading(true);
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`,
            { signal: controller.signal }
          );
          const geoData = await geoRes.json();

          if (!geoData.results) throw new Error("Find not found data weather");
          const { latitude, longitude, timezone, name, country_code } =
            geoData.results.at(0);
          setDisplayLocation({
            name: name,
            codes: convertToFlag(country_code),
          });
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
          );
          const weatherData = await weatherRes.json();
          if (!weatherData.daily) throw new Error("Weather daily not data");

          setWeather({ ...weatherData.daily });
        } catch (e) {
          console.log(e);
        } finally {
          setIssloading(false);
        }
      };

      fetchWeather();
      localStorage.setItem("location", location);
      return function () {
        controller.abort();
      };
    },
    [location]
  );
  return { location, weather, isLoading, displayLocation, setLocation };
}
