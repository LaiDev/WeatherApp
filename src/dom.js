let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");

function updateDisplay(location, weather) {
  //Gets the data from the argument and stores it as a variable called response
  location.then(function (locationData) {
    cityName.innerText = locationData.name;
  });

  weather.then(function (weatherData) {
    console.log(weatherData, "Success!");

    let fahrenheitTemp = Math.round(
      ((weatherData.main.temp - 273.15) * 9) / 5 + 32
    );

    temp.innerText = fahrenheitTemp;
  });
}

export { updateDisplay };
