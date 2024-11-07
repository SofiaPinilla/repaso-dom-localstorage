const userDiv = document.querySelector(".user")
console.log(userDiv);
//JSON.parse()convierte en JS lo que nos traemos del local Storage
const userSaved = JSON.parse(localStorage.getItem("User"))
console.log(userSaved)

// userDiv.innerHTML = "<p>Nombre: " + userSaved.name + "</p> <p> Correo: " + userSaved.email + "</p>"
userDiv.innerHTML = ` <p>Nombre:  ${userSaved.name}  </p> <p> Correo: ${userSaved.email} </p>`