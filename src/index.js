import "./styles/style.css";
import home from "./pages/home.js";

const contentElement = document.querySelector("#content");
home.build(contentElement);