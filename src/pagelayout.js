import { tempSelect, tempToFahrenheit, titleCaseConvert } from './helpers';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key.replace('./', '')] = r(key)));
}

// eslint-disable-next-line no-undef
importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

const content = document.getElementById('content');
const infoDiv = document.createElement('div');
const sectionDiv = document.createElement('section');

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
  const windIcon = document.createElement('img');
  const tempDiv = document.createElement('div');
  const windDiv = document.createElement('div');
  const toggleDiv = document.createElement('div');
  const toggleLabel = document.createElement('label');
  const toggle = document.createElement('input');
  const slider = document.createElement('span');
  const fLabel = document.createElement('div');
  const cLabel = document.createElement('div');

  infoDiv.className = 'info';
  infoHead.id = 'info-header';
  infoBody.id = 'info-body';
  cityDiv.id = 'city-name';
  icon.id = 'weather-icon';
  windIcon.id = 'wind-icon';
  tempDiv.id = 'current-temp';
  windDiv.id = 'wind-div';
  toggleDiv.id = 'toggle-div';
  toggleLabel.className = 'switch';
  toggle.type = 'checkbox';
  toggle.id = 'toggle';
  slider.className = 'slider';


  cityDiv.innerHTML = weatherObject.city + ', <br/>' + weatherObject.state;
  icon.src = cache[`${weatherObject.icon}.svg`];
  tempDiv.innerHTML = `<div>${tempToFahrenheit(weatherObject.currentTemps.temp)} \u2109</div>`;
  tempDiv.innerHTML += `<div>${titleCaseConvert(weatherObject.description)}</div>`;

  windIcon.src = cache[`wind.svg`];
  windDiv.appendChild(windIcon);
  windDiv.innerHTML += `<div> ${Math.round(weatherObject.wind.speed)} mph</div>`;
  
  fLabel.innerHTML = '\u2109';
  cLabel.innerHTML = '\u2103';

  toggleLabel.appendChild(toggle);
  toggleLabel.appendChild(slider);

  toggleDiv.appendChild(fLabel);
  toggleDiv.appendChild(toggleLabel);
  toggleDiv.appendChild(cLabel);

  infoHead.appendChild(cityDiv);
  infoHead.appendChild(icon);
  infoHead.appendChild(tempDiv);

  infoBody.appendChild(windDiv);
  infoBody.appendChild(toggleDiv);

  infoDiv.appendChild(infoHead);
  infoDiv.appendChild(infoBody);

  tempSelect(weatherObject.currentTemps.temp);
}

const section = () => { 
  const form = document.createElement('form');
  const searchInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('name', 'search');
  searchInput.setAttribute('placeholder', 'ex. Richmond, CA');
  searchInput.setAttribute('id', 'search');
  
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('id', 'search-btn');

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

//Clears all info div
export const clearInfo = () => {
  infoDiv.innerHTML = '';
}
