import "./styles/style.css";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

const contentElement = document.querySelector("#content");
const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const aboutButton = document.querySelector("#aboutButton");

function removeDom() {
    while(contentElement.hasChildNodes()) {
        contentElement.removeChild(contentElement.firstChild);
    }
}

home.build(contentElement);

homeButton.addEventListener("click", () => {
    removeDom();
    home.build(contentElement);
});
menuButton.addEventListener("click", () => {
    removeDom();
    menu.build(contentElement);
});
aboutButton.addEventListener("click", () => {
    removeDom();
    about.build(contentElement);
});