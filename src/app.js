//Uses the zipcode to return an object containing information about the users location. This includes : City Name, Country, Latitude, and Longitude

async function getLocationData(zipCode) {
  //assign the fetched data to locationData once it gets it
  const locationData = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=674d4fcffa55cdf3f103af8e346807c8`,
    { mode: `cors` }
  );

  const locationObj = await locationData.json();

  console.log(locationObj);

  //Calls getWeatherData() and inputs the lat and lon
  getWeatherData(locationObj.lat, locationObj.lon);
}

async function getWeatherData(lat, lon) {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=674d4fcffa55cdf3f103af8e346807c8`
  );

  const weatherObj = await weatherData.json();
  
  console.log(weatherObj);
}

getLocationData(30241);
