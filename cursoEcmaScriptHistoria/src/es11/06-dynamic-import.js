/*
La importación dinámica consiste en cargar los módulos cuando el usuario
 los vaya a utilizar, y no al iniciar la aplicación. Esto permite que la página
  web sea más rápida, porque descarga menos recursos.El secreto del dynamic import. 
  Es usar el async, await para llamar el modulo 
unicamente cuando sea requerido.
*/

const button = document.querySelector(".btn");

button.addEventListener("click", async function () {
    const module = await import("./module.js"); //recuerda completar la extension
    console.log(module);
    module.hello();
});