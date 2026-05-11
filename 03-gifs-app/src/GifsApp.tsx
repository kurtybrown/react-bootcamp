// import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import PreviousSearches from './gif/components/PreviousSearches'
import { GifList } from './gif/components/GifList'
import { useEffect, useState } from 'react'

const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])
  useEffect(() => {

  }, [])

  const handleTermClicked = (term: string) => {
    // const updatedTerms = []
    // updatedTerms.push(term)
    // setPreviousTerms(updatedTerms)
    console.log(term);
    

  }
  const handleSearch = (query: string) => {
    const parsedQuery = query.trim().toLowerCase()
    if(parsedQuery === '') return

    if(previousTerms.includes(parsedQuery)) return
    
    const auxTerms = previousTerms.splice(0, 7)
    auxTerms.unshift(parsedQuery)
  
    setPreviousTerms(auxTerms)
    // setPreviousTerms([parsedQuery, ...previousTerms.splice(0,7)])
  }

  return (
    <>
      {/* Header */}
      <CustomHeader title='Buscador de Gifs' description='¡Descubre y comparte los mejores Gifs!' />

      {/* Search  */}
      <SearchBar placeholderTitle ='Buscar gifs' onQuery = { handleSearch }/>
      {/* Búsquedas previas */}
      <PreviousSearches title='Búsquedas previas' onLabelClicked = { handleTermClicked } searches={ previousTerms }/>

      {/* Gifs  */}
      <GifList gifList={ mockGifs }/>
    </>
  )
}

export default GifsApp
