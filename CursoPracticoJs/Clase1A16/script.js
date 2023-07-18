//es similar a h1:nthChild(1) {}
//formas de traer elelmentos de html a JS

const title = document.querySelector("h1");
const p = document.querySelector("p");
const p1 = document.querySelector(".parrafito");
const p2 = document.getElementById("pid");
//const p2 = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(title, p, p1, p2, input, "yey");

//nos imprimira todas sus propiedades en forma de objetos como los varoles, eventos
//
console.log({title, p, p1, p2, input});
console.log(title);
console.log(input.value);


/*                             clase 12                        */
//title.append(" su puta madre")
//title.before(" su puta madre")
//title.after(" su puta madre")

//con el atributo innerHTMl hasta se pueden poner etiquetas html, ojo!, puede ser usado para los hackers
title.innerHTML = "yo soy de esas personas que respiran <p>puto</p>";

//con innerText no traduce las etiquetas html, solo pone el texto a secas
title.innerText = "yo soy de esas personas que respiran <p>puto</p>";

//los atributos a como he entendido, son las clases, ids, etc. con los que llamamos nuestras etiquetas
console.log(title.getAttribute("class")); 
title.setAttribute("class", "tituleishon");

title.classList.add("otraClase");
title.classList.remove("tituleishon");
//title.classList.toggle("tituleishon"); recomendado con eventos
//title.classList.contains("tituleishon"); revuelve true or false si tiene la clase o no

input.value = "modificado con JS";

const img = document.createElement("img");
img.setAttribute("src", "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtd4?ver=a738")
p2.innerText = "";
p2.append(img) //apprend y apprendchild (talvez) agregan contenido despues del contenido original
