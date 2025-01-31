import man from "../assets/images/man.jpg";
import "../styles/about.css";

export default {
    build: function(parentElement) {
        const wrapper = document.createElement("div");
        wrapper.setAttribute("id", "wrapper");
        parentElement.appendChild(wrapper);

        const img = document.createElement("img");
        img.src = man;
        wrapper.appendChild(img);

        const text = document.createElement("p");
        text.textContent = "I sell sausage sizzles mate";
        wrapper.appendChild(text);
    }
}



