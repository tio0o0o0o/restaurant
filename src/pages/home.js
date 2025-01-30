import tradie from "../assets/images/tradie.jpeg";
import "../styles/home.css";

export default {
    build: function(parentElement) {
        const h1 = document.createElement("h1");
        h1.textContent = "sausagesizzle.co.nz";
        parentElement.appendChild(h1);

        const div = document.createElement("div");
        div.setAttribute("class", "imageAndText");
        parentElement.appendChild(div);

        const img = document.createElement("img");
        img.src = tradie;
        div.appendChild(img);
 
        const p = document.createElement("p");
        p.textContent = "Get yo broke ass some sausage sizzles from sausagesizzle.co.nz";
        div.appendChild(p);
    },
    remove: function(parentElement) {
        while(parentElement.hasChildNodes()) {
            parentElement.removeChild(parentElement.firstChild);
        }
    }
}



