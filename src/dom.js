import { get } from "https";
import { getLocationData } from "./app";

let locationTxt = document.querySelector(".city");

export function changeLocationText() {
  const promise = getLocationData();
  promise.then((locationData) => console.log(locationData));
  console.log("TEst");
}
