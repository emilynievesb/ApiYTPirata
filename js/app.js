import { fetchId } from "./fetch.js";

const BUTTON = document.getElementById("button");

BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  document.querySelector(".cortina").style.display = "none";
  document.querySelector(".inicio").style.display = "flex";
  let nameVideo = document.getElementById("name-video").value;
  fetchId(nameVideo);
});

window.onload = () => {
  setTimeout(() => {
    document.querySelector(".inicio").style.display = "none";
    document.querySelector(".cortina").style.display = "block";
    document.querySelector(".navbar").style.zIndex = "1";
  }, 3000);
};
