const apiKey = '8f640f8fcc7f3fdc5f949c5b28f1bf02';

// Uses OpenWeather geocoding API to return lat/ long coordinates for searched location
async function getGeoData(location) {
  const searchLocation = location;
  try {
    const locationData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=5&appid=${apiKey}`,
      {mode: 'cors'});
    const locationGeoData = await locationData.json();
    console.log(locationGeoData);
    return locationGeoData;
  } catch (error) {
    Error(error);
  }
}

// Gets current weather and 5 day forecast for selected location
export async function getWeatherData(searchInput) {
  try {
    const cityData = await getGeoData(searchInput);
    let lat, long, cityList, state;
    if (cityData.length > 1) {
      for (let i = 0; i < cityData.length; i += 1) {
        cityList = cityData[i].state;
        console.log(cityList);
      }
      let selection = 'Virginia'; // For testin purposes only. User will select state from list
      let index = cityData.findIndex(city => city.state === selection);
      lat = cityData[index].lat;
      long = cityData[index].lon;
      state = selection;
      console.log(cityData[index].state);
    } else {
      lat = cityData[0].lat;
      long = cityData[0].lon;
      state = cityData[0].state;
    }
    
    const responses = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
      {mode: 'cors'});
    const currentWeather = await responses.json();
    const outputData = {
      city: searchInput,
      state: state,
      currentTemps: currentWeather.main,
      currentConditions: {description: currentWeather.weather[0].description,
        icon: currentWeather.weather[0].icon},
      wind: currentWeather.wind,
      sunrise: currentWeather.sys.sunrise,
      sunset: currentWeather.sys.sunset
    };

    console.log(cityData, currentWeather);
    console.log(outputData);
  } catch (error) {
    Error(error);
  }
}