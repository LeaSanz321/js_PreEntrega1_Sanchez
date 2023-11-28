function numeroAlAzar(){
    return Math.ceil(Math.random()*10);
}

function validarDato (dato){
    if (dato != "" && dato != isNaN){
        return true;
    }
    else{
        return false;
    }
}

function preguntar(){
    let pregunta = prompt("¿Quieres jugar una vez más? (si o no)");

    switch(pregunta){
        case "no":
            break;
        case "si":
            inicio();
    }
}

function inicio(){
    let intentosMaximos = prompt("Seleccione USTED -> en cuántos intentos cree que puede adivinar?");

    for (let i = 0; i < intentosMaximos; i++){
        let ganador = false;
        while(ganador == false){
            let numeroGanador = numeroAlAzar();
            let intentos = i;
            let intentoUsuario = prompt("Intente adivinar el número del 1 al 10:");
            if (validarDato(intentoUsuario) == true){
                intentos ++;
                
                let numeroUsuario = Number(intentoUsuario);
        
                if (numeroUsuario === numeroGanador){
                    alert("Número: " + numeroGanador);
                    alert("¡FELICIDADES! Haz acertado con " + intentos + " intentos");
                    ganador = true;
                    i = intentosMaximos+1;
                }else{
                    alert("Ups! Lo siento, número incorrecto!");
                    break;
                }
            }else{
                alert("Por favor ingresa un número váido.")
                break;
            }
        };
    }
    preguntar();
}
inicio();
