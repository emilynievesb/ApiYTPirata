import { fetchId } from "./fetch.js";

const BUTTON = document.getElementById("button");

BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  setTimeout(() => {
    document.querySelector(".cortina").style.display = "none";
  }, 3000);
  let nameVideo = document.getElementById("name-video").value;
  fetchId(nameVideo);
});
