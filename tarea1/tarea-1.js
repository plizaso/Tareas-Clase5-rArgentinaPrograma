function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
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
