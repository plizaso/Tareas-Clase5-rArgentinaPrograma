//console.log("Tarea 3");
//alert("Tarea 3");

function obtenerHoras() {
    const $horas = document.querySelectorAll("input.horas");
    const horas = [];
    for (let i = 0; i < $horas.length; i++) {
        horas.push(Number($horas[i].value));
    }
    return horas;
}
function obtenerMinutos() {
    const $minutos = document.querySelectorAll("input.minutos");
    const minutos = [];
    for (let i = 0; i < $minutos.length; i++) {
        minutos.push(Number($minutos[i].value));
    }
    return minutos;
}
function obtenerSegundos() {
    const $segundos = document.querySelectorAll("input.segundos");
    const segundos = [];
    for (let i = 0; i < $segundos.length; i++) {
        segundos.push(Number($segundos[i].value));
    }
    return segundos;
}
function sumarHoras(horas) {
    let sumaTotal = 0;
    for (let i = 0; i < horas.length; i++) {
        sumaTotal = sumaTotal + horas[i];
    }
    return sumaTotal;
}
function sumarMinutos(minutos) {
    let sumaTotal = 0;
    for (let i = 0; i < minutos.length; i++) {
        sumaTotal = sumaTotal + minutos[i];
    }
    return sumaTotal;
}
function sumarSegundos(segundos) {
    let sumaTotal = 0;
    for (let i = 0; i < segundos.length; i++) {
        sumaTotal = sumaTotal + segundos[i];
    }
    return sumaTotal;
}

document.querySelector("button").onclick = function () {
    let horas = sumarHoras(obtenerHoras());
    let minutos = sumarMinutos(obtenerMinutos());
    let segundos = sumarSegundos(obtenerSegundos());
    minutos = minutos + Math.trunc(segundos / 60);
    segundos = segundos % 60;
    horas = horas + Math.trunc(minutos / 60);
    minutos = minutos % 60;
    document.querySelector("strong").textContent = `Tiempo total: ${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`
}
