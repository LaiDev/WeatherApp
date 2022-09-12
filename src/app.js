let zipCode = document.querySelector("#zipCode");

//Gets information about the users location from the inputted zipcode

export async function getLocationData() {
  let locationResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${30241}&appid=674d4fcffa55cdf3f103af8e346807c8`,
    { mode: `cors` }
  );

  let locationData = await locationResponse.json();

  return locationData;
}

//Gets the location lat and lon from the zipcode

/*
async function getLocationData() {
  let locationResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode.value}&appid=674d4fcffa55cdf3f103af8e346807c8`,
    { mode: `cors` }
  );

  let locationData = await locationResponse.json();

  console.log(locationData);
}
*/

/*
  console.log(locationData);

  //Uses the lat and lon from locationResponse to get the actual weather data

  let weatherResposne = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=674d4fcffa55cdf3f103af8e346807c8`,
    { mode: `cors` }
  );
  let weatherData = await weatherResposne.json();

  console.log(weatherData);

  const name = locationData.name;
  //Converts the temp from Kelvin to Fahrenheit
  const temp = Math.ceil((weatherData.main.temp - 273.15) * 9/5 + 32);

*/
/*
  const city = document.querySelector(".city");
  city.innerText = locationData.name;

  let weatherType = document.querySelector(".weatherType");
  let currentWeather = weatherData.weather[0].main;

  switch (currentWeather) {
    case "Clouds":
      console.log("Cloudy");
      weatherType.innerText = "☁️";
      break;
    case "Rain":
      console.log("Raining");
      weatherType.innerText = "🌧️";
      break;
  }
  */
