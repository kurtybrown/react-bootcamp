import {heroes, type Hero, type Owner} from '../data/heroes.data';



const getHeroById = (id:number): Hero | undefined => {
  
  const hero = heroes.find((hero) => {
    return hero.id === id
  });
  
  // if (!hero) {
  //   throw new Error(`No existe el héroe con id ${id}`)
  // }

  return hero;
}

// console.log(getHeroById(2))

export const getHeroesByOwner = (owner:Owner): Hero[] => {

  const list = heroes.filter(hero => hero.owner === owner)

  return list
}

