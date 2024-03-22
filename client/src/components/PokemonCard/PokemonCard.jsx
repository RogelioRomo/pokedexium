import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from '../Loader/Loader.jsx'
import { getTypeColor } from '../../utils/scripts/getTypeColor/getTypeColor.jsx'
import { getStatIcon } from '../../utils/scripts/getStatIcon/getStatIcon.jsx'

export const PokemonCard = ({ pokemon }) => {
  if (!pokemon) {
    return (
      <Loader />
    )
  }

  return (
    <div className='bg-custom-black text-[#fff] capitalize border-solid border-[0.3rem] border-custom-gray rounded-[20px] w-fit p-6'>
      <div className='border-solid border-b-2 border-custom-gray-2 p-2 flex flex-col items-center'>
        <img className='pb-2 w-[200px]' src={pokemon.imageStatic} alt={`${pokemon.name}`} title={`${pokemon.name}`} />
        <h2 className='font-bold'>{pokemon.name}</h2>
      </div>
      <div className='flex flex-row items-start py-3 border-solid border-b-2 border-custom-gray-2 '>
        <h2 className='font-bold'>Type:</h2>
        <div className='mx-auto flex flex-row gap-4'>
          {getTypeColor(pokemon.types[0])}
          {getTypeColor(pokemon.types[1])}
        </div>
      </div>
      <div className='py-3 border-solid border-b-2 border-custom-gray-2'>
        <h2 className='font-bold text-'>Stats:</h2>
        <div className='grid grid-cols-2 justify-items-center'>
          {pokemon.stats.map((stat, index) => (
            <div className='flex flex-row items-center gap-2' key={index}>
              {getStatIcon(stat.name)}
              <span className='text-custom-blue py-2'>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='py-2'>
        <h2 className='font-bold text-'>Evolution:</h2>
        <div className='flex flex-row'>
          {pokemon.evolution.map((evolution, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img className='w-[80px] m-4' src={evolution.image} alt={`${evolution.name}`} title={`${evolution.name}`} />
              <span className='text-custom-blue'>{evolution.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object
}

// import React, { useEffect, useState } from 'react'
// import { Loader } from '../Loader/Loader.jsx'
// import axios from 'axios'
// import { getTypeColor } from '../../utils/scripts/getTypeColor/getTypeColor.jsx'
// import { getStatIcon } from '../../utils/scripts/getStatIcon/getStatIcon.jsx'

// export const PokemonCard = () => {
//   const [pokemon, setPokemon] = useState(null)

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/pokemon')
//       .then(response => {
//         setPokemon(response.data.result)
//         // console.log(response.data.result)
//       })
//       .catch(error => console.error('Error:', error))
//   }, [])

//   if (!pokemon) {
//     return (
//       <Loader />
//     )
//   }

//   return (
//     <>
//       {pokemon.map((poke, index) => (
//         <div key={index} className='bg-custom-black text-[#fff] capitalize border-solid border-[0.3rem] border-custom-gray rounded-[20px] w-fit m-auto p-6'>
//           <div className='border-solid border-b-2 border-custom-gray-2 p-2 flex flex-col items-center'>
//             <img className='pb-2 w-[200px]' src={poke.imageStatic} alt={`${poke.name}`} title={`${poke.name}`} />
//             <h2 className='font-bold'>{poke.name}</h2>
//           </div>
//           <div className='flex flex-row items-start py-3 border-solid border-b-2 border-custom-gray-2 '>
//             <h2 className='font-bold'>Type:</h2>
//             <div className='mx-auto flex flex-row gap-4'>
//               {getTypeColor(poke.types[0])}
//               {getTypeColor(poke.types[1])}
//             </div>
//           </div>
//           <div className='py-3 border-solid border-b-2 border-custom-gray-2'>
//             <h2 className='font-bold text-'>Stats:</h2>
//             <div className='grid grid-cols-2 justify-items-center'>
//               {poke.stats.map((stat, index) => (
//                 <div className='flex flex-row items-center gap-2' key={index}>
//                   {getStatIcon(stat.name)}
//                   <span className='text-custom-blue py-2'>{stat.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='py-2'>
//             <h2 className='font-bold text-'>Evolution:</h2>
//             <div className='flex flex-row'>
//               {poke.evolution.map((evolution, index) => (
//                 <div key={index} className='flex flex-col items-center'>
//                   <img className='w-[80px] m-4' src={evolution.image} alt={`${evolution.name}`} title={`${evolution.name}`} />
//                   <span className='text-custom-blue'>{evolution.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }
