//EJ2
// Crea un formulario que contenga el nombre y correo de un usuario
// Añade una validación para que se rellene si o si todos los campos
// Añade una validación de expresion regular para el correo
// si no se cumple alguna validación que muestre un mensaje
// Guarda ese usuario en el local storage

// Crea un archivo HTML ver Usuario donde se muestre el usuario guardado en el Local Storage

const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const btn = document.querySelector("#btn");
const msgDiv = document.querySelector(".msg");

const saveUser = (e) => {
    e.preventDefault();
    // expresión regular para validar que el correo este en un formato correcto
    const reEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //validación para que rellene todos los campos
    if (inputName.value == "" || inputEmail.value == "") {
        return (msgDiv.innerHTML = "Rellena todos los campos");
    }
    //validación del correo
    if (!reEmail.test(inputEmail.value)) {
        return (msgDiv.innerHTML = "Rellena un correo en un formato correcto");
    }
    //creamos el objeto user
    const user = {
        name: inputName.value,
        email: inputEmail.value,
    };
    // guardamos el objeto user en el local storage
    localStorage.setItem("User", JSON.stringify(user)); //sino convertimos el objeto en string no
    // mostramos en HTML un mensaje de que se guardó correctamente el usuario
    msgDiv.innerHTML = "Usuario guardado correctamente"
        // cuando pasen 3 segundos borramos el mensajes
    setTimeout(() => {
        return (msgDiv.innerHTML = "");
    }, 3000);
};

btn.addEventListener("click", saveUser);

//Paso 1: Me traigo los elementos del formulario HTML
//Paso 2: Creo una función con solo un console.log para probar (para que no recargar la página preventDefault)
//Paso 3: Añadimos al botón el evento para que cuando haga click ejecute la función del paso 2
//Paso 4: Mostrar por consola los valores de los input del formulario
//Paso 5: Guardar los datos de los input en un objeto
//Paso 6: Guardar el objeto del usuario en el local storage
//Paso 7: Añadimos las validaciones para que no guarde el usuario al menos que se cumplan
//Paso 8: Cuando se cumplan las validaciones mostramos un mensaje de que guardo con éxito y a los 3 segundos lo borramos