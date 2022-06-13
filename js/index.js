let btnIniciar = document.getElementById("btnIniciar");
let sectionIniciar = document.getElementById("comenzar");
let sectionList = document.getElementById("list");
//Botones
let btnAnalisis = document.getElementById("btnAnalisis");
let btnDefinir = document.getElementById("btnDefinir");
let btnDeterminar = document.getElementById("btnDeterminar");
let btnPrincipio = document.getElementById("btnPrincipio");
//Formularios
let contentAnalisis = document.getElementById("content-analisis");
let contentConjuntos = document.getElementById("content-conjuntos");
let contentDeterminar = document.getElementById("content-interseciones");
let contentPrincipio = document.getElementById("content-principio");
let btnCerrar = document.getElementById("cerrar");
let btnCerrar_1 = document.getElementById("cerrar-1");
let btnCerrar_2 = document.getElementById("cerrar-2");
let btnCerrar_3 = document.getElementById("cerrar-3");
//Lógica inclusión-exclusión
//conjunto 1
let number_one = document.getElementById("number_one");
let letter_one = document.getElementById("letter_one");
//conjunto 2
let number_two = document.getElementById("number_two");
let letter_two = document.getElementById("letter_two");
//conjunto 3
let number_three = document.getElementById("number_three");
let letter_three = document.getElementById("letter_three");
// Conjunto A
number_one.addEventListener ('keyup',(event) =>{
    let result;
    let inputNumber = event.path[0].value;
    document.querySelector('.n-one').innerHTML = inputNumber;
    document.querySelector('.n-one-2').innerHTML = inputNumber;
    document.querySelector('.n-one-3').innerHTML = inputNumber;
    result = 1000/inputNumber;
    document.querySelector('.n-one-4').innerHTML = result.toFixed();
    document.querySelector('.n-one-5').innerHTML = inputNumber;
});
letter_one.addEventListener('keyup',(event) =>{
    let inputLetter = event.path[0].value;
    document.querySelector('.letter-i').innerHTML = inputLetter.toUpperCase();
    document.querySelector('.letter-0').innerHTML = inputLetter.toUpperCase();
});
// Conjunto B
number_two.addEventListener ('keyup',(event) =>{
    let result;
    let inputNumber = event.path[0].value;
    document.querySelector('.n-two').innerHTML = inputNumber;
    document.querySelector('.n-two-2').innerHTML = inputNumber;
    document.querySelector('.n-two-3').innerHTML = inputNumber;
    result = 1000/inputNumber;
    document.querySelector('.n-two-4').innerHTML = result.toFixed();
    document.querySelector('.n-two-5').innerHTML = inputNumber;
});
letter_two.addEventListener('keyup',(event) =>{
    let inputLetter = event.path[0].value;
    document.querySelector('.letter-j').innerHTML = inputLetter.toUpperCase();
    document.querySelector('.letter-1').innerHTML = inputLetter.toUpperCase();
});
// Conjunto C
number_three.addEventListener ('keyup',(event) =>{
    let result;
    let inputNumber = event.path[0].value;
    document.querySelector('.n-three').innerHTML = inputNumber;
    document.querySelector('.n-three-2').innerHTML = inputNumber;
    document.querySelector('.n-three-3').innerHTML = inputNumber;
    result = 1000/inputNumber;
    document.querySelector('.n-three-4').innerHTML = result.toFixed();
    document.querySelector('.n-three-5').innerHTML = inputNumber;
});
letter_three.addEventListener('keyup',(event) =>{
    let inputLetter = event.path[0].value;
    document.querySelector('.letter-k').innerHTML = inputLetter.toUpperCase();
    document.querySelector('.letter-2').innerHTML = inputLetter.toUpperCase();
});

/*--------------------------------------------------------------------------------------------------*/

btnIniciar.addEventListener("click", () => {
    sectionIniciar.classList.toggle("active");
    sectionList.classList.toggle("active");
});
//Analisis
btnAnalisis.addEventListener("click", () => {
    contentAnalisis.classList.toggle("active");
});
//Definir los conjuntos
btnDefinir.addEventListener("click", () => {
    contentConjuntos.classList.toggle("active");
});
//Determinar las intersecciones
btnDeterminar.addEventListener("click", () => {
    contentDeterminar.classList.toggle("active");
});
//Principio de inclusión-exclusión
btnPrincipio.addEventListener("click", () => {
    contentPrincipio.classList.toggle("active");
});

function ConfirmDemo() {
    //Ingresamos un mensaje
    var mensaje = confirm("¿Quiere salir de la aplicación?");
    //Verificamos si el usuario acepto el mensaje
    if (mensaje) {
        sectionIniciar.classList.remove("active");
        sectionList.classList.remove("active");
    }
    //Verificamos si el usuario denegó el mensaje
    else {
    alert("¡Haz denegado el mensaje!");
    }
}
function ConfirmClose() {
    //Ingresamos un mensaje
    var mensaje = confirm("¿Quiere salir?");
    //Verificamos si el usuario acepto el mensaje
    if (mensaje) {
        contentAnalisis.classList.remove("active");
        contentConjuntos.classList.remove("active");
        contentDeterminar.classList.remove("active");
        contentPrincipio.classList.remove("active");
    }
    //Verificamos si el usuario denegó el mensaje
    else {
    alert("¡Haz denegado el mensaje!");
    }
}