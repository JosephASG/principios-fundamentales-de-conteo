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
//variables intersecciones 
let number_1 = document.getElementById("number_intersection_1");
let number_2 = document.getElementById("number_intersection_2");
let number_3 = document.getElementById("number_intersection_3");
let number_4 = document.getElementById("number_intersection_4");
let number_5 = document.getElementById("number_intersection_5");
let number_6 = document.getElementById("number_intersection_6");
let letter_1 = document.getElementById("letter_1");
let letter_2 = document.getElementById("letter_2");
let letter_3 = document.getElementById("letter_3");
let letter_4 = document.getElementById("letter_4");
let letter_5 = document.getElementById("letter_5");
let letter_6 = document.getElementById("letter_6");
/*-------------------------------Lógica inclusión-exclusión---------------------------------------------*/
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
/*------------------------------Interseciones------------------------------------*/
let inputNumber_1;
let inputNumber_2;
number_1.addEventListener ('keyup',(event) =>{
    inputNumber_1 = event.path[0].value;
    document.querySelector('.n-1').innerHTML = inputNumber_1;
});
number_4.addEventListener ('keyup',(event) =>{
    inputNumber_2 = event.path[0].value;
    document.querySelector('.n-2').innerHTML = inputNumber_2;
    r = inputNumber_1 * inputNumber_2;
    document.querySelector('.n-3').innerHTML = r;
    document.querySelector('.n-4').innerHTML = r;
    r_2 = 1000/r;
    document.querySelector('.r-2').innerHTML = r_2.toFixed();
});
number_2.addEventListener ('keyup',(event) =>{
    inputNumber_1 = event.path[0].value;
    document.querySelector('.n-5').innerHTML = inputNumber_1;
});
number_5.addEventListener ('keyup',(event) =>{
    inputNumber_2 = event.path[0].value;
    document.querySelector('.n-6').innerHTML = inputNumber_2;
    r = inputNumber_1 * inputNumber_2;
    document.querySelector('.n-7').innerHTML = r;
    document.querySelector('.n-8').innerHTML = r;
    r_2 = 1000/r;
    document.querySelector('.r-3').innerHTML = r_2.toFixed();
});
number_3.addEventListener ('keyup',(event) =>{
    inputNumber_1 = event.path[0].value;
    document.querySelector('.n-9').innerHTML = inputNumber_1;
});
number_6.addEventListener ('keyup',(event) =>{
    inputNumber_2 = event.path[0].value;
    document.querySelector('.n-1-0').innerHTML = inputNumber_2;
    r = inputNumber_1 * inputNumber_2;
    document.querySelector('.n-1-1').innerHTML = r;
    document.querySelector('.n-1-2').innerHTML = r;
    r_2 = 1000/r;
    document.querySelector('.r-4').innerHTML = r_2.toFixed();
});
let inputLetter_1;
let inputLetter_2;
letter_1.addEventListener('keyup',(event) =>{
    inputLetter_1 = event.path[0].value;
    document.querySelector('.l-1').innerHTML = inputLetter_1.toUpperCase();
    document.querySelector('.l-3').innerHTML = inputLetter_1.toUpperCase();
});
letter_4.addEventListener('keyup',(event) =>{
    inputLetter_2 = event.path[0].value;
    document.querySelector('.l-2').innerHTML = inputLetter_2.toUpperCase();
    document.querySelector('.l-4').innerHTML = inputLetter_2.toUpperCase();
});
letter_2.addEventListener('keyup',(event) =>{
    inputLetter_1 = event.path[0].value;
    document.querySelector('.l-5').innerHTML = inputLetter_1.toUpperCase();
    document.querySelector('.l-7').innerHTML = inputLetter_1.toUpperCase();
});
letter_5.addEventListener('keyup',(event) =>{
    inputLetter_2 = event.path[0].value;
    document.querySelector('.l-6').innerHTML = inputLetter_2.toUpperCase();
    document.querySelector('.l-8').innerHTML = inputLetter_2.toUpperCase();
});
letter_3.addEventListener('keyup',(event) =>{
    inputLetter_1 = event.path[0].value;
    document.querySelector('.l-9').innerHTML = inputLetter_1.toUpperCase();
    document.querySelector('.l-1-1').innerHTML = inputLetter_1.toUpperCase();
});
letter_6.addEventListener('keyup',(event) =>{
    inputLetter_2 = event.path[0].value;
    document.querySelector('.l-1-0').innerHTML = inputLetter_2.toUpperCase();
    document.querySelector('.l-1-2').innerHTML = inputLetter_2.toUpperCase();
});


/*--------------------------------------------------------------------------------------------------*/
