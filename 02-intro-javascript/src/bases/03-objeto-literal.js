const persona = {
  nombre : 'Carlos',
  apellido: 'Ocaña',
  edad: 23,
  direccion: {
    ciudad: 'Madrid',
    zip: '28116'
  }
}

const persona2 = persona //esto es un puntero, no un nuevo objeto

const persona3 = {...persona} //esto es una copia objeto persona (... operador spread)

persona2.nombre = 'Julian' // persona.nombre será Julian a partir de ahora

persona3.nombre = 'Charles'
console.log(persona, persona2, persona3);

