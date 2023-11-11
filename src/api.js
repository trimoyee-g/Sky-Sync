// from decouple import config

// require('dotenv').config();
export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ac3d9cf5b9mshfa68d2523252c28p178d6fjsn8acc0ac3f5e8",// rapid api key here
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "b8b576cb34ff9d22c400c52be1777076"; // key from openweather API here

