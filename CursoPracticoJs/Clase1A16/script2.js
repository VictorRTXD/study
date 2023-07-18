const h1 = document.querySelector("h1");
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btnCalcular = document.getElementById("btnCalcular");
let result = document.getElementById("result");
const form = document.getElementById("form");
const teclas = document.querySelector(".colores");


function sumarInputValues(event) {
    event.preventDefault(); //evita ejecute el evento con propiedades por default
    console.log({event});
    result.innerText = "el resultado es: " + (Number(input1.value) + Number(input2.value));
}

/*otra forma de evitar que el boton recargara la pagina era ponerle el atributo type = "button
" porque el ultimo boton le pone la propiedad type = "submit" que es el que recargaba las paginas */
form.addEventListener("submit", sumarInputValues);


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarColor() {
    const randomColor = getRandomColor();
    teclas.style.backgroundColor = randomColor;
}
document.addEventListener("keydown", cambiarColor);

function agrandar() {
    btnCalcular.style.width = "100px";
    btnCalcular.style.height = "100px";
}
btnCalcular.addEventListener("mouseover", agrandar);

function achicar() {
    btnCalcular.style.width = "75px";
    btnCalcular.style.height = "20px"; 
}
btnCalcular.addEventListener("mouseout", achicar);