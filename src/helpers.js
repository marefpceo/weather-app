export const tempToFahrenheit = (temp) => {
  let fTemp;
  fTemp = Math.round((temp - 273.15) * (9/5) + 32);
  return fTemp;
}

const tempToCelsius = (temp) => {
  let cTemp;
  cTemp = Math.round(temp - 273.15);
  return cTemp;
}

// Checks to make sure there is a comma between city and state
export const inputStringCheck = (inputString) => {
  const input = inputString.split('');
  const commaCheck = input.includes(',');
  const spaceCheck = input.includes(' ');
  let testIndex = input.length - 2;

  if (commaCheck === false && spaceCheck === true) {
    input[testIndex - 1] = ',';   
    const test = input.join('');
    return test;
  } else {
    return inputString;
  }
}

//Converts the weather description to title case
export const titleCaseConvert = (title) => {
  const titleArray = title.split(' ');

  for (let i = 0; i < titleArray.length; i += 1) {
    titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].substr(1);
  }
  
  let convertedString = titleArray.join(' ');
  return convertedString;
}
  
//Toggles between fahrenheit and celsius base on toggle switch
export const tempSelect = (temp) => {
  const selection = document.getElementById('toggle');
  const tempDiv = document.querySelector('#current-temp > div');
  let displayTemp;
  selection.addEventListener('change', () =>{ 
    if (selection.checked === false) {
      displayTemp = tempToFahrenheit(temp);
      tempDiv.innerHTML = `<div>${displayTemp} \u2109</div>`;
    } else {
      displayTemp = tempToCelsius(temp);
      tempDiv.innerHTML = `<div>${displayTemp} \u2103</div>`;
    }
  });
}
