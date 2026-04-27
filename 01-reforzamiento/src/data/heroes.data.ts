export interface Hero { 
  id:number,
  name:string,
  owner: Owner
}

export type Owner = 'DC' | 'Marvel'

// devuelve 0 o 1, si no se especifica un valor
// enum Owner {
//   DC = 'DC',
//   Marvel = 'Marvel'
// }

export const heroes: Hero[] = [
  // {
  //   id: 1,
  //   name: 'Batman',
  //   owner: Owner.DC,
  // },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];

// export * from 