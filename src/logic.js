import { inputStringCheck } from './helpers';
import { clearInfo, info } from './pagelayout';

const apiKey = '8f640f8fcc7f3fdc5f949c5b28f1bf02';
const outputData = {};

// Uses OpenWeather geocoding API to return lat/ long coordinates for searched location
async function getGeoData(location) {
  const searchLocation = location;
  try {
    const locationData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchLocation},us&appid=${apiKey}`,
      {mode: 'cors'});
    const locationGeoData = await locationData.json();
    return locationGeoData;
  } catch (error) {
    Error(error);
  }
}

// Gets user city and state code input to search
export const getInputData = () => {
  const searchBtn = document.getElementById('search-btn');
  let inputValue = document.getElementById('search');
  
  searchBtn.addEventListener('click', () => {
    const cityInput = inputStringCheck(inputValue.value);
    getWeatherData(cityInput);
    inputValue.value = '';
  });

  inputValue.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchBtn.click();
    } else {
      return;
    }
  });
}

// Gets current weather forecast for selected location
export async function getWeatherData(searchInput) {
  try {
    const cityData = await getGeoData(searchInput);
    let lat, long, city, state;

    lat = cityData[0].lat;
    long = cityData[0].lon;
    city = cityData[0].name;
    state = cityData[0].state;
    
    const responses = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
      {mode: 'cors'});
    const currentWeather = await responses.json();
    
    outputData.city = city;
    outputData.state = state;
    outputData.currentTemps = currentWeather.main;
    outputData.description = currentWeather.weather[0].description;
    outputData.icon = currentWeather.weather[0].icon;
    outputData.wind = currentWeather.wind;
    outputData.sunrise = currentWeather.sys.sunrise;
    outputData.sunset = currentWeather.sys.sunset;
    outputData.timezone = currentWeather.timezone;
  
    clearInfo();
    info(outputData);

  } catch (error) {
    console.log(Error(error));
    alert(`No data found for ${searchInput}`);
  }
}
