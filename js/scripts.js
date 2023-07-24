// querySelector
const heading = document.querySelector('.header_texto h2'); ///0 o 1 Elemento, solo selecciona maxima un elemento
// heading.textContent = 'Blog café de los mejores consejos'
console.log(heading);

// querySelectorAll
const elnaces = document.querySelectorAll('.nav a');
// elnaces[0].textContent = 'Nuevo enlace';
console.log(elnaces);

// getElementById  //No es muy utilizado
// const heading2 = document.getElementById('heading'); //Selector para Id
// console.log(heading2);

// Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A')
//  Agregar el href 
nuevoEnlace.href = 'tienda-virtual.html';

//Agregar texto
nuevoEnlace.textContent = 'Tienda virtual';

//agregar enlace
nuevoEnlace.classList.add('nav_enlace');


//Agregarlo al documento
const navegacion = document.querySelector('.nav');
navegacion.appendChild(nuevoEnlace);
console.log(navegacion);
console.log(nuevoEnlace);




//eventos
console.log(1);

window.addEventListener('load', function(){
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
})