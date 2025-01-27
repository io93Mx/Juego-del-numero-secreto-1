





//variables

let lista = [];
let rango = parseInt(prompt('Dame un rango, del 1 al ?\n Se recomiendan 5'));
let intentosPermitidos = parseInt(prompt('Numero de intentos?\n Se recomiendan 2'));
let intentosHechos = 1;

//manda un numero entre 0 y 0.9999
//let numeroSecreto = Math.random();

// //manda un numero entre 0 y 0.99, lo *10, lo convierte en entero, sin decimal(math.floor), y le +1
// let numeroSecreto = Math.floor(Math.random()*rango+1);
// console.log(`El numero secreto es: ${numeroSecreto} `);
// lista.push(numeroSecreto);

function juego () {

    //let lista = [];
    //let rango = parseInt(prompt('dame un rango'));

    while (lista.length != rango) {

        //manda un numero entre 0 y 0.99, lo *10, lo convierte en entero, sin decimal(math.floor), y le +1
        let numeroSecreto = Math.floor(Math.random()*rango+1);
        console.log(`El numero secreto es: ${numeroSecreto} `);
        console.log(`numero de intento: ${intentosHechos} `);

        if (lista.includes(numeroSecreto)) {
            numeroSecreto = Math.floor(Math.random()*rango+1);        
        } else {
            lista.push(numeroSecreto);
            console.log(`La lista es: ${lista} `);
        }
        
        let numeroDelUsuario = prompt(`indica un numero entre 1 y ${rango} `);//(=) signo de igualdad de asignacion
        console.log(`El numero del usuario es:\n ${numeroDelUsuario} `);

        if (numeroSecreto == numeroDelUsuario) { //(==) signo de igualdad de comparacion

            //si acertamos
            console.log(`Los numeros son iguales?\n ${numeroDelUsuario == numeroSecreto} `);
            alert(`Los numeros son iguales?\n ${numeroDelUsuario == numeroSecreto}`);//parametro valor string

        //si no acertamos
        } else {

            if (numeroDelUsuario > numeroSecreto) {
                console.log(`El numeo secreto es menor que:\n ${numeroDelUsuario}`);
                alert(`El numero secreto es menor que:\n ${numeroDelUsuario}`);
            } else {
                console.log(`El numeo secreto es mayor que:\n ${numeroDelUsuario}`);
                alert(`El numero secreto es mayor que:\n ${numeroDelUsuario}`);
            }

            intentosHechos++;

            console.log(`Los numeros son iguales?\n ${numeroDelUsuario == numeroSecreto} `);
            alert(`Los numeros son iguales?\n ${numeroDelUsuario == numeroSecreto}`);//parametro valor string
        
        }

        if (lista.length == rango) {
            console.log(`Los numeros se acabaron\n ${lista} `);
            alert(`Los numeros se acabaron\n ${lista}`);
            lista = [];
            //break;
        }
        juego();

    }

}
juego();





