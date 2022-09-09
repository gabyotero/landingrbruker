const nombre = document.getElementById("input-name");
const mail = document.getElementById("input-mail");
const telefono = document.getElementById("input-phone");
const mensaje = document.getElementById("input-msj");
const input = document.querySelectorAll(".input");

console.log(input);
input.forEach(element => {
    element.addEventListener('click', () =>{
        element.classList.toggle("show-input-style");
    })
});
