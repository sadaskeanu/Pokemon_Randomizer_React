import { useState } from 'react'
import './styles.css'
import getRandomNumber from './utils/getRandomNumber'
import RandomButton from './components/RandomButton/RandomButton'
import PokemonCard from './components/PokemonCard/PokemonCard'
import PokemonCoverCard from './components/PokemonCoverCard/PokemonCoverCard'

export default function App() {
  let [pokemon, setPokemon] = useState()

  function handleOnclick() {
    let number = getRandomNumber(300)
    const serverURL = `https://pokeapi.co/api/v2/pokemon/${number}`
    fetch(serverURL)
      .then(response => response.json())
      .then(item => {
        let result = item
        setPokemon(result)
        console.log(result)
      })
  }

  return (
    <div className="App">
      {pokemon ? <PokemonCard pokemon={pokemon} /> : <PokemonCoverCard />}
      <RandomButton onClick={handleOnclick} />
    </div>
  )
}
