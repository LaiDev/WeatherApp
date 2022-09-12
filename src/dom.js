let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let dateText = document.querySelector(".date");
let date = new Date().toDateString();
let tempUnit = "°F";
function updateDisplay(location, weather) {
  //Gets the data from the argument and stores it as a variable called response
  location.then(function (locationData) {
    cityName.innerText = locationData.name;
  });

  weather.then(function (weatherData) {
    let fahrenheitTemp = Math.round(
      ((weatherData.main.temp - 273.15) * 9) / 5 + 32
    );

    temp.innerText = fahrenheitTemp.toString() + `${tempUnit}`;
    dateText.innerText = `${date}`;
  });
}

export { updateDisplay };
