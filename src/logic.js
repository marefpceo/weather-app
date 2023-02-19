import { clearInfo, info, stateListModal } from './pagelayout';

const apiKey = '8f640f8fcc7f3fdc5f949c5b28f1bf02';
const outputData = {};

// Uses OpenWeather geocoding API to return lat/ long coordinates for searched location
async function getGeoData(location) {
  const searchLocation = location;
  try {
    const locationData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=5&appid=${apiKey}`,
      {mode: 'cors'});
    const locationGeoData = await locationData.json();
    return locationGeoData;
  } catch (error) {
    Error(error);
  }
}

// Gets user city input to search
export const getInputData = () => {
  const searchBtn = document.getElementById('search-btn');
  
  searchBtn.addEventListener('click', () => {
    let inputValue = document.getElementById('search');
    getWeatherData(inputValue.value);
    inputValue.value = '';
  });
}

// Gets current weather forecast for selected location
export async function getWeatherData(searchInput) {
  try {
    const cityData = await getGeoData(searchInput);
    let lat, long, state;
    let stateList = [];
    if (cityData.length > 1) {
      for (let i = 0; i < cityData.length; i += 1) {
        stateList.push(cityData[i].state);
      }
      stateListModal(stateList);

      console.log(stateList);
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
    
    outputData.city = searchInput;
    outputData.state = state;
    outputData.currentTemps = currentWeather.main;
    outputData.description = currentWeather.weather[0].description;
    outputData.icon = currentWeather.weather[0].icon;
    outputData.wind = currentWeather.wind;
    outputData.sunrise = currentWeather.sys.sunrise;
    outputData.sunset = currentWeather.sys.sunset;
  
    clearInfo();
    info(outputData);

    console.log(cityData, currentWeather);
    console.log(outputData);
    
  } catch (error) {
    console.log(Error(error));
    alert('No data found for the city');
  }
}