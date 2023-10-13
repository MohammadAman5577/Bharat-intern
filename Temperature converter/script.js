function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const resultElement = document.getElementById("result");

  if (fromUnit === "celsius") {
    // Convert Celsius to Fahrenheit and Kelvin
    const fahrenheit = (inputTemp * 9) / 5 + 32;
    const kelvin = inputTemp + 273.15;
    resultElement.innerHTML = `${inputTemp} &deg;C = ${fahrenheit.toFixed(
      2
    )} &deg;F in fahrenheit and ${kelvin.toFixed(2)} K in kelvin` ;
  } else if (fromUnit === "fahrenheit") {
    // Convert Fahrenheit to Celsius and Kelvin
    const celsius = ((inputTemp - 32) * 5) / 9;
    const kelvin = ((inputTemp - 32) * 5) / 9 + 273.15;
    resultElement.innerHTML = `${inputTemp} &deg;F = ${celsius.toFixed(
      2
    )} &deg;C in celcius and ${kelvin.toFixed(2)} K in kelvin`;
  } else {
    // Convert Kelvin to Celsius and Fahrenheit
    const celsius = inputTemp - 273.15;
    const fahrenheit = ((inputTemp - 273.15) * 9) / 5 + 32;
    resultElement.innerHTML = `${inputTemp} K = ${celsius.toFixed(
      2
    )} &deg;C in celcius and ${fahrenheit.toFixed(
      2
    )} &deg;F in fahrenheit`;
  }
}
