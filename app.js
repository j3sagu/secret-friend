// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Selección de elementos
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');

// Función para agregar amigos
// Uso trim para eliminar espacios en blanco en el campo del nombre
function agregarAmigo() {
  const nombre = inputNombre.value.trim();

  // Validación de campo vacío
  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  // Crear y agregar un nuevo elemento de la lista
  const nuevoAmigo = document.createElement('li');
  nuevoAmigo.textContent = nombre;
  listaAmigos.appendChild(nuevoAmigo);

  // Limpiar campo de entrada
  inputNombre.value = '';
}