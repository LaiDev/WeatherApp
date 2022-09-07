async function getWeatherData() {
  let zipCode = 30241;

  let response = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=674d4fcffa55cdf3f103af8e346807c8`,
    { mode: `cors` }
  );

  let weatherData = await response.json();

  console.log(weatherData);
  
  console.log(weatherData.name)
}

getWeatherData();
