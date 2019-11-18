const padre = document.querySelector("#container");
//Ejemplo con un archivo mio

/* fetch("texto.txt")
  .then(res => res.text())
   */
/* cuando se usa arrow function y se hace la funcion en una sola linea, la funcion tiene un return automatico
    que devuelve el resultado de lo que se esta haciendo */
/*  .then(data => {
    padre.innerHTML = data;
  })
  .catch(err => console.log(err)); */
//revisa cada uno de los then y mira si hay algun error
//cada vez que hay un fetch se usa el then y el catch

//Ejemplo para traer info de alguien mas

/* const foto = document.querySelector("#foto");
fetch("https://picsum.photos/400/600")
  .then(res => res.blob())
  .then(data => {
    let imagenURL = URL.createObjectURL(data);
    foto.src = imagenURL;
  })
  .catch(err => console.log(err));
 */
//https://picsum.photos/ pagina para traer fotos

//Ejemplo3

const foto = document.querySelector("#foto");
const nombre = document.querySelector("#nombre");
const login = document.querySelector("#login");
fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let name = data.results[0].name.first;
    nombre.innerHTML = `<h2>${name}</h2>`;
    let imagen = data.results[0].picture.large;
    foto.src = imagen;
    let user = data.results[0].login.username;
    login.innerHTML = ` usuario: ${user}`;
  });
