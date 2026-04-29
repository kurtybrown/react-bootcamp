import type { CSSProperties } from "react";

const favGames = ['WoW', "Baldur's Gate", 'Counter Strike' ]
const isActive = false;

const address = { 
  zipCode: '123acde',
  country: 'Spain'
}
const name = 'Carlos'
const lastName = 'Ocaña'

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: isActive ? 10 : 20,
  padding: 10,
  marginTop: 30
}

export function MyAwesomeComp () {
  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      <p>{favGames.join(', ')}</p>
      <p>{2+1}</p>
      <h2>{isActive ? 'Activo' : 'No activo'}</h2>
      <p
        style={ myStyles }
      >
        { JSON.stringify(address) }
      </p>
    </>
  )

}