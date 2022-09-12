import { getLocationData, getWeatherData } from "./app";
import { updateDisplay } from "./dom";

let userZipCode = document.querySelector("#zipCode");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", handleThis);

//When the button is clicked, called getlocationData to get the data for the inputed zipcode. Using that information, call a function which will update the ui with the proper values

function handleThis() {
  let location = getLocationData(userZipCode.value);

  location.then(function (response) {
    let weather = getWeatherData(response.lat, response.lon);

    updateDisplay(location, weather);
  });
}
