import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader.jsx'
import axios from 'axios'

export const PokemonCard = () => {
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
    return (
      <Loader />
    )
  }

  return (
    <>
      {pokemon.map((poke, index) => (
        <div key={index} className='bg-custom-black text-[#fff] capitalize border-solid border-[0.3rem] border-custom-gray rounded-[20px] w-fit m-auto p-6 '>
          <div className='border-solid border-b-2 border-custom-gray-2 p-2 flex flex-col items-center'>
            <img className='pb-2 w-[200px]' src={poke.imageStatic} alt={`${poke.name}`} title={`${poke.name}`} />
            <h2>{poke.name}</h2>
          </div>
          <div className='flex flex-col items-start py-2'>
            <h2>Type:</h2>
            <div className='mx-auto'>
              <h3 className='text-custom-blue'>{poke.types[0]}</h3>
              <h3 className='text-custom-blue'>{poke.types[1]}</h3>
            </div>
          </div>
          <div>
            <h2>Weakness:</h2>
          </div>
          <div>
            <h2>Stats:</h2>
            <div className='flex flex-col items-center'>
              {poke.stats.map((stat, index) => (
                <div key={index}>
                  <span>{stat.name}:</span>
                  <span className='text-custom-blue'> {stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className=''>
            <h2>Evolution:</h2>
            <div className='flex flex-row'>
              {poke.evolution.map((evolution, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <img className='w-[80px] m-4' src={evolution.image} alt={`${evolution.name}`} title={`${evolution.name}`} />
                  <span className='text-custom-blue'>{evolution.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
