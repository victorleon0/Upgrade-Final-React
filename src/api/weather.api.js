// KEY: 057e18e0685c4d93baf83751220607

// https://api.weatherapi.com/v1/current.json?key=057e18e0685c4d93baf83751220607&q=${ciudad}&aqi=no





const getCity = async (url) => {
  try {
    const res = await fetch(url);
    const {location, condition} = await res.json();
    const city = {
      location,
      condition
    };

    return city;
  } catch (error) {
    console.log("Error obteniendo la ciudad", error)
  }
};


const getWeather = async (url) => {
    try {
      const res = await fetch(url);
      const {name, country, temperature, localtime, condition, conditionIcon} = await res.json();
      const cityWeather = {
        //name: city.map((name) => location.name),
        //country: city.map((country) => location.country),
        //temperature: city.map((temp_c) => location.temp_c),
        //condition: city.map((text) => condition.text),
        //conditionIcon: city.map((icon) => condition.icon),
      };
  
      return cityWeather;
    } catch (error) {
      console.log("Error obteniendo el tiempo de  ",error)
    }
  };

  
  const getWeatherList = async() => {
    try {
      const res = await fetch("https://api.weatherapi.com/v1/current.json?key=057e18e0685c4d93baf83751220607&q=${ciudad}&aqi=no", {mode: 'cors'})
      const result = await res.json();
      return result.results;
    } catch (error) {
      console.log("Error obteniendo el tiempo", error);
    }
  }
  
  export const getAllInformation = async () => {
    const weathers = await getWeatherList();
    
    for (const weather of weathers) {
      const weather = await getWeather(weather.url);
      
    }
  
    return {
    
    };
  }
  