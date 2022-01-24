//console.log("Tarea 3");
//alert("Tarea 3");

function obtenerNumeros($inputs) {
    const numeros = [];
    for (let i = 0; i < $inputs.length; i++) {
        numeros.push(Number($inputs[i].value));
    }
    return numeros;
}

function sumarNumeros(array) {
    let sumaTotal = 0;
    for (let i = 0; i < array.length; i++) {
        sumaTotal += array[i];
    }
    return sumaTotal;
}

document.querySelector("button").onclick = function () {
    let horas = sumarNumeros(obtenerNumeros(document.querySelectorAll("input.horas")))
    let minutos = sumarNumeros(obtenerNumeros(document.querySelectorAll("input.minutos")))
    let segundos = sumarNumeros(obtenerNumeros(document.querySelectorAll("input.segundos")))
    const minutosEnHora = 60;
    const segundosEnMinuto = 60;
    minutos += Math.trunc(segundos / segundosEnMinuto);
    segundos = segundos % segundosEnMinuto;
    horas += Math.trunc(minutos / minutosEnHora);
    minutos = minutos % minutosEnHora;
    document.querySelector("strong").textContent = `Tiempo total: ${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`
}
