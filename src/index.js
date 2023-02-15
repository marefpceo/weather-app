import { getWeatherData } from './logic';
import { loadPage } from './pagelayout';
import './style.css';


getWeatherData('Lemoore');
loadPage();

console.log();
