function calcularSalarioMensual(salarioAnual) {
    const mesesEnUnAnio = 12;
    return salarioAnual / mesesEnUnAnio;
}

const $botonCalcular = document.querySelector("#boton-calcular");
$botonCalcular.onclick = function () {
    const salarioAnual = Number(document.querySelector("#salario-anual").value);
    if(salarioAnual<0){
        alert("El salario anual deber ser un número positivo.");
    }else{
        document.querySelector("#salario-mensual").value = calcularSalarioMensual(salarioAnual);
    }
    return false;
}
