import { timeConversion } from './helpers';
import { tempToFahrenheit } from './helpers';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key.replace('./', '')] = r(key)));
}

// eslint-disable-next-line no-undef
importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

const content = document.getElementById('content');
const infoDiv = document.createElement('div');

const header = () => {
  const headerDiv = document.createElement('header');
  const title = document.createElement('h1');

  title.innerText = 'The Weather App';
  headerDiv.appendChild(title);
  content.appendChild(headerDiv);
}

export const info = (weatherObject) => {
  const infoHead = document.createElement('div');
  const infoBody = document.createElement('div');
  const cityDiv = document.createElement('div');
  const icon = document.createElement('img');
  const sunriseIcon = document.createElement('img');
  const sunsetIcon = document.createElement('img');
  const windIcon = document.createElement('img');
  const tempDiv = document.createElement('div');
  const sunDiv = document.createElement('div');
  const sunriseDiv = document.createElement('div');
  const sunsetDiv = document.createElement('div');
  const windDiv = document.createElement('div');

  infoDiv.className = 'info';
  infoHead.id = 'info-header';
  infoBody.id = 'info-body';
  cityDiv.id = 'city-name';
  icon.id = 'weather-icon';
  sunriseIcon.id = 'sunrise-icon';
  sunsetIcon.id = 'sunset-icon';
  sunriseDiv.className = 'sun';
  sunsetDiv.className = 'sun';
  windIcon.id = 'wind-icon';
  tempDiv.id = 'current-temp';
  sunDiv.id = 'sun-div';
  windDiv.id = 'wind-div';

  cityDiv.innerHTML = weatherObject.city + ', <br/>' + weatherObject.state;
  icon.src = cache[`${weatherObject.icon}.svg`];
  tempDiv.innerHTML = `<div>${tempToFahrenheit(weatherObject.currentTemps.temp)}</div>`;
  tempDiv.innerHTML += `<div>${weatherObject.description}</div>`;

  sunriseIcon.src = cache[`sunrise.svg`];
  sunriseDiv.appendChild(sunriseIcon);
  sunriseDiv.innerHTML += `<div>${timeConversion(weatherObject.sunrise)}</div>`;

  sunsetIcon.src = cache[`sunset.svg`];
  sunsetDiv.appendChild(sunsetIcon);
  sunsetDiv.innerHTML += `<div>${timeConversion(weatherObject.sunset)}</div>`;

  windIcon.src = cache[`wind.svg`];
  windDiv.appendChild(windIcon);
  windDiv.innerHTML += `<div> ${weatherObject.wind.speed} mph</div>`;

  infoHead.appendChild(cityDiv);
  infoHead.appendChild(icon);
  infoHead.appendChild(tempDiv);

  sunDiv.appendChild(sunriseDiv);
  sunDiv.appendChild(sunsetDiv);

  infoBody.appendChild(sunDiv);
  infoBody.appendChild(windDiv);

  infoDiv.appendChild(infoHead);
  infoDiv.appendChild(infoBody);
  
  console.log(weatherObject);
  console.log(cache);
  return infoDiv;
}

const section = () => {
  const sectionDiv = document.createElement('section');
  const form = document.createElement('form');
  const searchInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('name', 'search');
  searchInput.setAttribute('placeholder', 'Enter city');
  searchInput.setAttribute('id', 'search');
  
  submitBtn.id = 'search-btn';

  form.appendChild(searchInput);
  form.appendChild(submitBtn);
  sectionDiv.appendChild(form);
  sectionDiv.appendChild(infoDiv);
  content.appendChild(sectionDiv);
}

export const loadPage = () => {
  header();
  section();
}