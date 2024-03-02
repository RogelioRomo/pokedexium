import { Link } from 'react-router-dom'
import './PokemonPreview.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const PokemonPreview = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8080/api/pokemon')
      .then(response => {
        setPokemon(response.data.result)
        // console.log(response.data.result)
      })
      .catch(error => console.error('Error:', error))
  }, [])

  if (!pokemon) {
    return <div className='text-white'>Loading...</div>
  }

  return (
    <>
      {pokemon.map((poke, index) => (
        <div key={index}>
          <div className='card'>
            <div className='top-section'>
              <div className='border' />
              <div className='icons'>
                <div className='logo'>
                  <img src='/images/pokeball.svg' alt='pokeball' />
                </div>
                <div className='pokemonNumber'>
                  <span># {poke.number}</span>
                </div>
              </div>
              <div className='image-section'>
                <img className='image-size' src={poke.image} alt='gif of pokemon' />
              </div>
            </div>
            <div className='bottom-section'>
              <span className='title'>{poke.name}</span>
              <div className='row row1'>
                <div className='item'>
                  <span className='big-text'>Type</span>
                  <span className='regular-text'>{poke.types.join(' and ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
