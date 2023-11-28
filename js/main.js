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


let numeroGanador = numeroAlAzar();

let intentos = 0;

let ganador = false;

while(ganador == false){
   
    let intentosMaximos = prompt("Seleccione USTED -> en cuántos intentos cree que puede adivinar?");
    let intentoUsuario = prompt("Intente adivinar el número del 1 al 10:");

    for (let i = 0; i < intentosMaximos; i++){
        if (validarDato(intentoUsuario)){
            intentos ++;
            
            let numeroUsuario = Number(intentoUsuario);
    
            if (numeroUsuario === numeroGanador){
                alert("Número: " + numeroGanador);
                alert("¡FELICIDADES! Haz acertado con " + intentos + " intentos");
                ganador = true;
            }else{
                alert("Ups! Lo siento, número incorrecto!");
                continue;
            }
            
        }else{
            alert("Por favor ingresa un número váido.")
        }
    };


}







