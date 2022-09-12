import { getLocationData } from "./app";
import { changeLocationText } from "./dom";

const searchButton = document.querySelector("#searchBtn");

searchButton.addEventListener("click", changeLocationText);
