# Tarea 2
Creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario.
También vamos a crear un `<h1>` que diga Bienvenido!
Vas a crear un botón de acción que una vez que lo apretás, va a mostrar toda la información junta en un campo de texto y va a cambiar el `<h1>` para decir "Bienvenido, nombreDeUsuario!"
Ejemplo form:
```html
    <form id="entrada-bar" onsubmit="return false;">
        <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
        <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
        <input type="submit" value="Ingresar" id="ingresar"/>
    </form>

    <div id="resultado">Hola</div>
```
