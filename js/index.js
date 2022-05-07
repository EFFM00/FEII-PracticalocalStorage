/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

window.addEventListener("load", () => {    

    let form = document.querySelector("form");
    let comentario = document.getElementById("comentario");
    let divComentarios = document.getElementById("comentarios");
    
    let arrayComentarios = [];

    divComentarios.innerHTML = "";

    form.addEventListener("submit", e => {

        e.preventDefault();

        if(comentario.value !== ""){
            arrayComentarios.push(comentario.value);
            console.log(arrayComentarios);
            
            localStorage.setItem("comentarios", JSON.stringify(arrayComentarios));

            comentario.value = ""

        }

        reenderizar();


    })


    function reenderizar(){

        let arrayParseado = JSON.parse(localStorage.getItem("comentarios"))

        divComentarios.innerHTML = "";
        arrayParseado.forEach( comentario => {
            divComentarios.innerHTML += `<p>${comentario}</p>`

        })

    }













})