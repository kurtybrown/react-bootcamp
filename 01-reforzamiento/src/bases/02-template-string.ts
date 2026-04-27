const firstName = 'Carlos'
const lastName = 'Ocaña'

const ironman = {
  name: 'Tony',
  age: 45,
  address: {
    postalCode: 123213,
    city: 'NY'
  }
}

interface Hero {
  name: string;
  age: number;
  address: Address;

}

interface Address {
  postalCode: string,
  city: string
}

const superman: Hero = {
  name: "Clark",
  age: 33,
  address: {
    postalCode: '3213ad',
    city: 'NY'
  }
}
const spiderman = structuredClone(ironman) //creas un nuevo objeto que copia la estructura y así puedes modificar datos

spiderman.name = 'Peter'

const getUser2 = ():Object => {
  return {
    uid: 'abc',
    username: 'papito'
  }
}

const charNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = charNames;

console.log({trunks});

const useState = (value:string) => {
  return [value, (newValue:string) => console.log(newValue)] as const;
}

const [name, setName] = useState('Goku')
console.log(name);
setName('Cell')




