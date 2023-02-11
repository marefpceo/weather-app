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
export async function getWeatherData() {
  try {
    const cityData = await getGeoData('Richmond');
    let lat, long, cityList;
    if (cityData.length > 1) {
      for (let i = 0; i < cityData.length; i += 1) {
        cityList = cityData[i].state;
        console.log(cityList);
      }
      let selection = prompt('Select state');
      let index = cityData.findIndex(city => city.state === selection);
      lat = cityData[index].lat;
      long = cityData[index].lon;
      console.log(index);
    } else {
      lat = cityData[0].lat;
      long = cityData[0].lon;
    }
    
    const responses = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
      {mode: 'cors'}),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`,
      {mode: 'cors'})
      ]);

    const currentWeather = await responses[0].json();
    const fiveDayWeather = await responses[1].json();

    console.log(currentWeather, fiveDayWeather);
  } catch (error) {
    Error(error);
  }
}