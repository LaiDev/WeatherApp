let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");

function updateDisplay(location) {

  //Gets the data from the argument and stores it as a variable called response
  location.then(function (response) {
    cityName.innerText = response.name;
  });
}

export { updateDisplay };
