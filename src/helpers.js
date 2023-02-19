export const tempToFahrenheit = (temp) => {
  let fTemp;
  fTemp = Math.round((temp - 273.15) * (9/5) + 32);
  return fTemp;
}

export const tempToCelsius = (temp) => {
  let cTemp;
  cTemp = Math.round(temp - 273.15);
  return cTemp;
}

export const timeConversion = (epochTime) => {
  let utcTime = (epochTime * 1000);
  let time = new Date(utcTime).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'});
  return time;
}