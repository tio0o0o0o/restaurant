import classicSausageSizzle from "../assets/images/classic-sausage-sizzle.jpg";
import bruhWhat from "../assets/images/bruh-what.jpg";
import "../styles/menu.css";

export default {
    build: function(parentElement) {
        const wrapper = document.createElement("div");
        wrapper.setAttribute("id", "wrapper");
        parentElement.appendChild(wrapper);

        const img1 = document.createElement("img");
        img1.src = classicSausageSizzle;
        wrapper.appendChild(img1);
 
        const name1 = document.createElement("p");
        name1.textContent = "Classic";
        wrapper.appendChild(name1);

        const price1 = document.createElement("p");
        price1.textContent = "$3";
        wrapper.appendChild(price1);

        const img2 = document.createElement("img");
        img2.src = bruhWhat;
        wrapper.appendChild(img2);
 
        const name2 = document.createElement("p");
        name2.textContent = "Huh?";
        wrapper.appendChild(name2);

        const price2 = document.createElement("p");
        price2.textContent = "$4.50";
        wrapper.appendChild(price2);
    }
}



