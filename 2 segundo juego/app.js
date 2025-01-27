





//ambito de la variable, local o global
//las funciones realizan tareas
//DOM = document object model = como se conecta HTML y JS

//1 empezamos poniendo el titulo y un parrafo

//selectores
//selecciona la etiqueta h1 de HTML, es un objeto
// (.)salen los metodos disponibles

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

//se declara la let, antes del bloque de codigo que la usa o la llama
let numeroDeIntentosHechos = 1;
let numeroDeIntentosPermitidos = parseInt(prompt('En cuantos intentos te gustaria adivinar el numero secreto?\nSe recomiendan 2 intentos para un rango del 1 al 5'));
let rango = parseInt(prompt('Adivina un numero entre 1 y ?'));

//si lo dejamos asi, al llamar a la funcion condiciones iniciales, aparecen 2 numeros secretos, por lo que hay que declararla en condiciones iniciales
//console.log('el # secreto es: ' + numeroSecreto);
let numeroSecreto = generarNumeroSecreto();


//creando una funcion para el evento 'onclick'
//se ejecuta cuando damos click en el boton que llama esta funcion (boton intentar)
function verificarIntento() {
    //alert('Click desde el boton');
    //la let, guarda el (value) del id(#)valorUsuario (input)
    let numeroDeUsuario = parseInt(document.querySelector('#valorUsuario').value);
    console.log('el numero secreto es: ' + typeof(numeroSecreto) + ' ' + numeroSecreto);
    console.log('el numero del usuario es: ' + typeof(numeroDeUsuario) + ' ' + numeroDeUsuario);
    console.log('el numero secreto y el numero del usuario es el mismo ? ' + (numeroSecreto === numeroDeUsuario)); //=== quiere decir si es identico, en valor y tipo

    //cada vez que presione el boton, se muestra el numero de intentos hechos
    console.log('Este fue el intento numero: ' + numeroDeIntentosHechos);
    

    // si los numeros son identicos, llama a la funcion
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoAelemento(`p`, `Acertaste el numero en ${numeroDeIntentosHechos} ${(numeroDeIntentosHechos == 1) ? 'intento' : 'intentos'} `); //utilizamos string template y el operador ternario
        //se activa el boton nuevo juego(#reiniciar), solo si aciertas
        document.getElementById('reiniciar').removeAttribute('disabled');

    //si no son identicos entonces(si no acertamos), si
    } else {
        //si no son identicos, entonces, si el numero del usuario es mayor que el numero secreto, entonces, si falla y
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoAelemento('p',`El numero secreto no es ${numeroDeUsuario}, es menor, este fue el intento numero: ${numeroDeIntentosHechos} `);
        //si no es mayor, si es menor(de lo contrario), entonces
        } else {
            asignarTextoAelemento('p', `El numero secreto no es ${numeroDeUsuario}, es mayor, este fue el intento numero: ${numeroDeIntentosHechos} `);
        }
        
        //cada vez q no c acierte, se aumenta el contador de los intentos en 1
        numeroDeIntentosHechos ++;
        //sino acierta, se llama a la funcion
        limpiarInput();
        //si falla y superas los intentos permitidos ?
        if (numeroDeIntentosHechos > numeroDeIntentosPermitidos) {
            //se muestra el mensage
            asignarTextoAelemento('p', `Perdiste, ya no tienes mas intentos, el numero secreto era: ${numeroSecreto} `);
            //se activa el boton nuevo juego
            document.getElementById('reiniciar').removeAttribute('disabled');
            
        }


    }
    //si aciertas tambien limpia el input, llama ala funcion, si no estuviera aqui, y solo arriba, solo lo limpia cuando no aciertas 
    limpiarInput();
    //si no aciertas tambien se activa el boton nuevo juego con la linea de abajo
    //document.getElementById('reiniciar').removeAttribute('disabled');


    return; //regresa lo que hizo la funcion
}

//para quitar codigo repetido, utilizamos una funcion

// codigo repetido
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del numero secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';

//codigo optimizado

function asignarTextoAelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //no retorna nada, esta vacio
}


//llamando funcion declarada ambito global, se ejecuta primero (donde sea, se puede llamar y declarar)
    //asignarTextoAelemento('h1', 'Juego del numero secreto');
    //asignarTextoAelemento('p', 'Dame un numero del 1 al 10');
//como se ocupan mucho, se convierten en una funcion, en vez de llamarla una por una, llamamos la funcion donde las metimos
//se ejecuta en ambito global, por lo que al inicio se ejecuta
    //mensajesIniciales();

    //function mensajesIniciales() {
        //asignarTextoAelemento('h1', 'Juego del numero secreto');
        //asignarTextoAelemento('p', 'Dame un numero del 1 al 10');
    //}
//pero como se combinan con otras condiciones al momento de dar un click en el boton nuevo juego, se cambia el nombre de la funcion y queda, primero la llamada
function condicionesIniciales() {
    asignarTextoAelemento('h1', 'Juego del numero secreto');
    asignarTextoAelemento('p', `Adivina el numero secreto, puede ser del 1 al ${rango}, tienes ${numeroDeIntentosPermitidos} ${(numeroDeIntentosPermitidos == 1) ? 'intento' : 'intentos'} `);
    numeroSecreto = generarNumeroSecreto();
    numeroDeIntentosHechos = 1;
    console.log('el # secreto es: ' + numeroSecreto);
    console.log('tus intentos son: ' + numeroDeIntentosPermitidos);
        
}
//se llama a la funcion al inicio del juego
condicionesIniciales();




//genera un numero secreto

function generarNumeroSecreto() {
    //la funcion genera un # aleatorio entre 0 y 0.9 *10 +1 == entre 1 y 10
    
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
    //no es necesario crear una variable

    //cuando se ejecuta la funcion, retorna lo que hizo la funcion, un valor
    return Math.floor(Math.random()*rango)+1;
}
// la let llama a la funcion que genera un numero entre 1 y 10
//se ejecuta primero este console.log por que no esta dentro de ningun bloque de codigo, esta en el ambito global y se llama a la funicon a travez de la let
//se debe declarar antes del bloque de codigo que la llama para que funcione bien
//let numeroSecreto = generarNumeroSecreto();
//console.log('el # secreto es: ' + numeroSecreto);

//almacenar un contador, al menos con una vez se puede acertar, se tiene que declar antes de ser llamada, como cuando se llama en la funcion, condiciones iniciales
//let numeroDeIntentosHechos = 1;



//funcion para cuando se acierta y cuando no
function limpiarInput() {
    //selecciona el input y lo deja vacio
    document.querySelector('#valorUsuario').value = '';
}

//funcion que se activa al darle click al boton 'nuevo juego'
function reiniciarJuego() {
    
    //que cosas pasan cuando reinicias el juego?
    //como esta el juego al principio
    //1  limpiar input
    //mostrar mensaje en etiqueta p, sobre dame un numero del uno al 10
    //generar numero aleatorio, se llama a la funcion
    //la let numero de intentos hechos resetearlo(inicializar)
    limpiarInput();
    condicionesIniciales();
    //deshabilitar boton 'nuevo juego'
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

// //agrgar elementos a una lista = insercion
// //indice = posicion de una lista, comienza en [0] en JS
// let frutas = ['manzana', 'naranja', 'platano', 'melon'];
// //console.log(frutas) // ['manzana', 'naranja', 'platano', 'melon']
// frutas.push('sandia'); //agrega sandia al final de la lista
// frutas.pop(); //elimina el ultimo elemento(sandia)
// console.log('la longitud del arreglo es: ' + frutas.length); //devuelve la cantidad de valores que hay en la lista (4)
// console.log('el primer elemento es: ' + frutas[0]); //el primer elemento (manzana)
// console.log('el ultimo elemento es: ' + frutas[frutas.length -1]); //el ultimo elemento (melon)
// console.log('la lista es: ' + frutas);
// console.log('el elemento borrado es el ultimo elemento, que es: ' +frutas.pop());



