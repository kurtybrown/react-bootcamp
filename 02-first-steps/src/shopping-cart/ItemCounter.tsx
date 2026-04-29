
import React, { useState } from 'react'



// import './ItemCounter.css';
import styles from './ItemCounter.module.css'

interface Props {
  name:string;
  quantity?: number;
}

const ItemCounter = ({name, quantity = 1}:Props) => {

  const [ count, setCount ] = useState(quantity)

  const handleAdd = () => {
    return setCount(count + 1)
  }

  const handleSubstrack = () => {
    if(count === 1 ) return
    return setCount(count - 1)
  }
  return (
    <section className={ styles.itemRow }
      // style={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   gap: 10,
      //   marginTop: 10
      // }}
    >
      <span className= { styles['text-width'] }
        style={{
          color: count === 1 ? 'red' : 'black'
        }}
      >
        {name}
      </span>
      <button 
        // onMouseEnter={ () => { console.log(`Mouse enter ${name}`)}}
        onClick={ handleAdd }

      > +1 </button>
      <span>{count}</span>
      <button onClick={ handleSubstrack }> -1 </button>

    </section>
  )
}

export default ItemCounter
