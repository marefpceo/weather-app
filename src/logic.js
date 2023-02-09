export async function getData(location) {
  const apiKey = '8f640f8fcc7f3fdc5f949c5b28f1bf02';
  const searchLocation = location;
  try {
    const locationData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=5&appid=${apiKey}`,
      {mode: 'cors'});
    const weatherData = await locationData.json();
    console.log(weatherData);
  } catch (error) {
    Error(error);
  }
}