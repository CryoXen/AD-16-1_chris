
function getFormvalue() {
  // Evita que el formulario recargue la página
  event.preventDefault();

  // Obtener los inputs por nombre
  const nombre = document.forms["form1"]["fname"].value;
  const apellido = document.forms["form1"]["lname"].value;

  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
}
