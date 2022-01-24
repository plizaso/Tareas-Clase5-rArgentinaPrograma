//console.log("Tarea 4");
//alert("Tarea 4");

function obtenerNumeros($lis){
    let numeros = [];
    for(let i=0; i<$lis.length; i++){
        numeros.push(Number($lis[i].textContent));
    }
    return numeros;
}

function obtenerPromedio(numeros){
    let sumaTotal = 0;
    for(let i=0; i<numeros.length; i++){
        sumaTotal = sumaTotal+numeros[i];
    }
    return sumaTotal/numeros.length;
}

function obtenerMaximo(numeros){
    let maximo = numeros[0];
    for(let i=0; i<numeros.length; i++){
        if(maximo<numeros[i]){
            maximo = numeros[i];
        }
    }
    return maximo;
}

function obtenerMinimo(numeros){
    let minimo = numeros[0];
    for(let i=0; i<numeros.length; i++){
        if(minimo>numeros[i]){
            minimo = numeros[i];
        }
    }
    return minimo;
}

function cantidadApariciones(n, conj){
    let apariciones = 0;
    for(let i=0; i<conj.length; i++){
        if(n===conj[i]){
            apariciones++;
        }
    }
    return apariciones;
}

function obtenerMasFrecuente(numeros){
    let masFrecuente = numeros[0];
    for(let i=1; i<numeros.length; i++){
        if(cantidadApariciones(masFrecuente, numeros)<cantidadApariciones(numeros[i], numeros)){
            masFrecuente = numeros[i];
        }
    }
    return masFrecuente;
}

const numeros = obtenerNumeros(document.querySelectorAll("li"));
document.querySelector("#promedio").textContent += obtenerPromedio(numeros).toString();
document.querySelector("#minimo").textContent += obtenerMinimo(numeros).toString();
document.querySelector("#maximo").textContent += obtenerMaximo(numeros).toString();
document.querySelector("#mas-frecuente").textContent += obtenerMasFrecuente(numeros).toString();

