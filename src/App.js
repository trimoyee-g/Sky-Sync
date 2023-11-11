import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import TypewriterComponent from "typewriter-effect";



function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="bg-purple-950 border-2 text-white" >
      <div>
        <div >
        <div>
        <h2  className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl text-center pt-10">SkySync
        </h2>
        <br />
        <div className="p-10">
        <p className="text-1xl border-double border-4 border-white p-7 text-justify hover:bg-white hover:text-purple-950 rounded-md">Welcome to <strong>SkySync</strong>, your ultimate weather companion designed to keep you ahead of the elements! We understand the importance of staying informed about the weather, whether you're planning your daily activities, a weekend getaway, or a business trip. With <strong>SkySync</strong>, you can have accurate and real-time weather information right at your fingertips.<br />
        Stay prepared, stay safe, and stay ahead of the weather with <strong>SkySync</strong> !</p></div>
        </div>
        
            <div className="p-5">
              
          <div className="p-7 border-double border-4 border-purple-900 bg-white text-purple-950 rounded-md ">
            WHY CHOOSE US?
          <div className="text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
          <TypewriterComponent
            options={{
              strings: [
                "Real-Time Weather Updates",
                "Global Coverage",
                "Extended Forecasts",
                "User Friendly Interface"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
            </div>
            </div>
            </div>

            
        </div>
        
    <div className="text-black">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
    </div>
  );
}

export default App;