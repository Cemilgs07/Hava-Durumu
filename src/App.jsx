import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./index.css";
import Days from "./days";
function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [durum, setDurumu] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API
          }&q=${location}&days=4&aqi=yes&alerts=yes`
        );
        setWeather(response.data);

        // Veriyi state'e atar
      } catch (error) {
        setWeather(""); // Veriyi state'e atar
      }
    };

    if (location) {
      fetchData(); // API çağrısını başlat
      console.log(weather);
    }
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <>
      <div className="app-container">
        <h1 style={{ position: "static" }} className="app-title">
          Hava Durumu Uygulaması
        </h1>
        <div className="input-container">
          <input
            type="text"
            className="location-input"
            placeholder="Şehir Giriniz."
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="days-weather">
          {weather &&
            weather.forecast.forecastday.map((item) => {
              return <Days key={item.date} item={item} />;
            })}
        </div>
      </div>
    </>
  );
}

export default App;
