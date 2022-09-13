//Uses the zipcode to return an object containing information about the users location. This includes : City Name, Country, Latitude, and Longitude

export async function getLocationData(zipCode) {
  const locationData = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=674d4fcffa55cdf3f103af8e346807c8`,
    { mode: `cors` }
  );

  const locationObj = await locationData.json();

  return locationObj;
}

export async function getWeatherData(lat, lon) {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=674d4fcffa55cdf3f103af8e346807c8`,
    { mode: `cors` }
  );

  const weatherObj = await weatherData.json();

  console.log(weatherObj);

  return weatherObj;
}
