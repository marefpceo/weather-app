const content = document.getElementById('content');

const header = () => {
  const headerDiv = document.createElement('header');
  const title = document.createElement('h1');

  title.innerText = 'The Weather App';
  headerDiv.appendChild(title);
  content.appendChild(headerDiv);
}

const info = () => {
  const infoDiv = document.createElement('div');
  
  infoDiv.className = 'info';

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
  sectionDiv.appendChild(info());
  content.appendChild(sectionDiv);
}

export const loadPage = () => {
  header();
  section();
}