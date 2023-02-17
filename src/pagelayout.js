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
  infoDiv.className = 'info';
  infoDiv.innerText = weatherObject.city;
  console.log(weatherObject);
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