
const container = document.getElementById("container");
const second = document.getElementsByClassName("second");
const thirdol = document.querySelector("ol li.third")
const saludo = document.createElement("p");
saludo.textContent = "Hola!";
container.appendChild(saludo)

const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");

footerDiv.classList.remove("main");

const newLi = document.createElement("li");

newLi.textContent = "four";

const ulElement = container.querySelector("ul"); // Seleccionamos el ul dentro del container
ulElement.appendChild(newLi);