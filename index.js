const modoBoton = document.getElementById("modoBoton");
const cuerpo = document.body;

modoBoton.addEventListener("click", cambiarModo);

function cambiarModo() {
  cuerpo.classList.toggle("oscuro");
  modoBoton.classList.toggle("oscuro") //Toogle añade o elimina si la clase esta existe o no existe, si la clase oscuro existe  lo elimina y si la clase no existe lo añadirá
}
