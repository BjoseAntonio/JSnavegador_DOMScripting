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


// // Seleccionar elementos y asociarlos a un evento 
// const btnEnviar = document.querySelector('.boton--secundario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log('Enviando formulario');
    
// });


// Eventos de los input y textArea 
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
formulario.addEventListener('input', leerTexto);



// Evento de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    

    // // Validar el formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        // console.log('Error, llenar los campos necesarios');
        alerta('Error, llenar los campos necesarios', 'error');


        return; //Corta la ejecución del código 
    }

    //Enviar formulario
    //  console.log('Enviando Formulario');
    /* mostrarValidacion*/ alerta('Enviado correctamente');
    
});


function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos)
}

// Mostrar error (alerta)
// function mostrarError(mensaje){
//     // console.log(mensaje);
//     const error = document.createElement('P'); //Creamos elemento para HTML
//     error.textContent = mensaje;
//     error.classList.add('error');
//     formulario.appendChild(error);

//     // Desaparcer alerta despues de X segundos
//     setTimeout(() =>{
//         error.remove();
//     }, 4500);
// }

// Mostra Validación (alerta)
// function mostrarValidacion(mensaje){
//     // console.log(mensaje);
//     const validarFormulario = document.createElement('P');
//     validarFormulario.textContent = mensaje;
//     validarFormulario.classList.add('validar');
//     formulario.appendChild(validarFormulario);

//     // Desaparcer alerta despues de X segundos
//     setTimeout(() =>{
//         validarFormulario.remove();
//     }, 4500);

// }

// Refactoring Alertas
function alerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = (mensaje);

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() =>{
        alerta.remove();
    }, 4500);


}


