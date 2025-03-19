// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Selección de elementos
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Array para almacenar los nombres ya sorteados y evitar repeticiones (juego número secreto)
let nombresSorteados = [];

// Función para agregar amigos
// Uso de trim para eliminar espacios en blanco en los nombres introducidos
function agregarAmigo() {
  const nombre = inputNombre.value.trim();

  // Alerta para auxiliar a validar un campo vacío
  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  // Verificar duplicados para mejorar la experiencia del juego
  const nombresExistentes = Array.from(listaAmigos.children).map(amigo => amigo.textContent);
  if (nombresExistentes.includes(nombre)) {
    alert('El nombre ya está en la lista. Ingrese uno diferente.');
    inputNombre.value = '';
    return;
  }

  // Crear y agregar un nuevo elemento de la lista
  const nuevoAmigo = document.createElement('li');
  nuevoAmigo.textContent = nombre;
  listaAmigos.appendChild(nuevoAmigo);

  // Limpiar campo de entrada
  inputNombre.value = '';
}

// Función para sortear un amigo
function sortearAmigo() {
  const nombresDisponibles = Array.from(listaAmigos.children).map(amigo => amigo.textContent).filter(nombre => !nombresSorteados.includes(nombre));

  // Verificar si todos los nombres ya han sido sorteados
  if (nombresDisponibles.length === 0) {
    alert('Todos los nombres ya han sido sorteados.');
    return;
  }

  // Seleccionar un nombre aleatorio
  const indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
  const nombreSeleccionado = nombresDisponibles[indiceAleatorio];

  // Mostrar resultado y agregar a los sorteados
  nombresSorteados.push(nombreSeleccionado);
  const resultadoItem = document.createElement('li');
  resultadoItem.textContent = `Amigo secreto seleccionado: ${nombreSeleccionado}`;
  resultado.appendChild(resultadoItem);
}
