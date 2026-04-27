

const nombre = 'Carlos'
const apellido = 'Ocaña'

const nombreCompleto = `${ nombre } ${ apellido }`

function saludo(nombre) {
  return `Hola ${ nombre }`
}

console.log(saludo(nombreCompleto));
