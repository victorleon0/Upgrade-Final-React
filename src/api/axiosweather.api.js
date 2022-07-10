// KEY: 057e18e0685c4d93baf83751220607

// https://api.weatherapi.com/v1/current.json?key=057e18e0685c4d93baf83751220607&q=${ciudad}&aqi=no

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={f93afd7c993ac5daa11a4b336bf3c98c}

 
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f93afd7c993ac5daa11a4b336bf3c98c";

export const fetchweather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};