


// variables

let rango = parseInt(prompt('adivina un numero entre 1 y ?'));
let numeroSecreto = Math.floor(Math.random() * (rango) + 1);
console.log(numeroSecreto);
let numeroUsuario; // debemos declarar la var primero antes del bucle
let intentos = 1; // comienza en el intento numero 1
let palabraIntento = 'intento';
//  let palabraIntentos = 'intento'; // singular porq empieza en el 1er intento
let maxintentos = 3;
let maxxintentos = 3;


//ciclo while
while (numeroUsuario != numeroSecreto) { // != diferente de
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${rango} por favor, solo tienes ${maxintentos} ${maxintentos == 1 ? 'intento' : 'intentos'}: `)); // OPERADOR TERNARIO ${maxintentos == 1 ? 'intento' : 'intentos'} si maxintentos == a 1 ?(entonces) devuelve 'intento' :(sino) 'intentos'

    // parseInt, convierte la entrada (prompt) a numero entero

    console.log(typeof(numeroUsuario)); //typeof nos dice que tipo de valor es 

    /*
    este codigo compara las variables
    */
    if (numeroUsuario == numeroSecreto) { // si aciertas. == es igual a.
        alert(`Acertaste, el numero es ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'} `); // utilizamos `{}` y ${intentos > 1 ? 'vez' : 'veces'} = si intentos > 1 se ocupa 'vez' :(sino) veces 
    } else { // si no aciertas
        if (numeroUsuario > numeroSecreto) {
            alert('el numero secreto es menor');
        } else {
            alert('el numero secreto es mayor');
        }
        alert(`Lo siento, no acertaste en tu ${intentos} ${palabraIntento} el numero era otro, pero elegiste ${numeroUsuario}, te ${maxintentos === 2 ? 'queda' : 'quedan'} ${maxintentos -= 1 } ${maxintentos == 1 ? 'intento' : 'intentos'}`);
    
        // incrementa el contado cuando no acierta a la primera y la palabra intento tambien
        intentos = intentos + 1;
        // es igual que: 
        // intentos += 1;
        // o intentos++;
        // palabraIntentos = 'intentos';

        if (intentos > maxxintentos) {
            alert(`Llegaste al numero maximo de ${maxxintentos} intentos`);
            alert(`el numero secreto era ${numeroSecreto} `);
            break; // no sales del while hasta que adivine el numero o haga + de maxintentos 
        }

    }

}