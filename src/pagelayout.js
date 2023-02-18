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
  const tempDiv = document.createElement('div');
  const sunDiv = document.createElement('div');
  const windDiv = document.createElement('div');

  infoDiv.className = 'info';
  infoHead.id = 'info-header';
  infoBody.id = 'info-body';
  cityDiv.id = 'city-name';
  icon.id = 'weather-icon';
  tempDiv.id = 'current-temp';
  sunDiv.id = 'sun-div';
  windDiv.id = 'wind-div';

  cityDiv.innerHTML = weatherObject.city + ', <br/>' + weatherObject.state;
  icon.src = cache[`${weatherObject.icon}.svg`];
  tempDiv.innerHTML = `<div>${weatherObject.currentTemps.temp}</div>`;
  tempDiv.innerHTML += `<div>${weatherObject.description}</div>`;
  sunDiv.innerHTML = `<div>Sunrise: ${weatherObject.sunrise}</div>`;
  sunDiv.innerHTML += `<div>Sunset: ${weatherObject.sunset}</div>`;
  windDiv.innerHTML = `<div>Wind: ${weatherObject.wind.speed} mph</div>`;

  infoHead.appendChild(cityDiv);
  infoHead.appendChild(icon);
  infoHead.appendChild(tempDiv);

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