// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Selección de elementos
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Array para almacenar los nombres de los amigos con let
let nombresAmigos = [];

// Permitir agregar con la tecla Enter (lo que facilita la jugabilidad)
inputNombre.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    agregarAmigo();
  }
});

// Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const nombre = inputNombre.value.trim();

  // Validar la entrada
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Actualizar el array de amigos
  nombresAmigos.push(nombre);

  // Mostrar la lista actualizada
  mostrarAmigos();

  // Limpiar el campo de entrada
  inputNombre.value = '';
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
  // Limpiar la lista existente
  listaAmigos.innerHTML = '';

  // Recorrer y agregar cada nombre del array como <li>
  for (let i = 0; i < nombresAmigos.length; i++) {
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombresAmigos[i];
    listaAmigos.appendChild(nuevoAmigo);
  }
}

// Función para sortear un amigo (ajustada para mayor claridad)
function sortearAmigo() {
  // Validar que haya nombres disponibles en el array
  if (nombresAmigos.length === 0) {
    alert('La lista está vacía. Agrega al menos un nombre antes de hacer el sorteo.');
    return;
  }

  // Generar un índice aleatorio y obtener el nombre sorteado
  const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
  const nombreSeleccionado = nombresAmigos[indiceAleatorio];

  // Mostrar el resultado del sorteo
  resultado.innerHTML = `Amigo secreto seleccionado: ${nombreSeleccionado}`;
}
