$botonIngresar = document.querySelector("#boton-ingresar");
$botonIngresar.onclick = function () {
    const primerNombreUsuario = document.querySelector("#primer-nombre").value.toUpperCase();
    const segundoNombreUsuario = document.querySelector("#segundo-nombre").value.toUpperCase();
    const apellidosUsuario = document.querySelector("#apellidos").value.toUpperCase();
    const edadUsuario = Number(document.querySelector("#edad").value);
    if (primerNombreUsuario === "" || apellidosUsuario === "" || edadUsuario === 0) {
        alert("Completar todos los campos obligatorios.");
    } else if (edadUsuario <= 0) {
        alert("La edad debe ser mayor que 0");
    } else {
        document.querySelector("h1").textContent = `Bienvenido, ${primerNombreUsuario}!`;
        const infoUsuario = `Nombre/s: ${primerNombreUsuario} ${segundoNombreUsuario} | Apellido/s: ${apellidosUsuario} | Edad: ${edadUsuario} años`;
        document.querySelector("#resultado").textContent = infoUsuario;
        //$botonIngresar.disabled = true;
    }
    //console.log("Boton Ingresar fue presionado.");
    return false;
}
document.querySelector("#reset").onclick = function () {
    document.querySelector("h1").textContent = "Bienvenido!";
    document.querySelector("#resultado").textContent = "";
    //$botonIngresar.disabled = false;
}
