import { Link } from 'react-router-dom'

export const PokemonPreview = () => {
  return (
    <div className='rounded-xl bg-[#c1c1c1] shadow-custom w-fit p-6'>
      <div className='rounded-full bg-[#c1c1c1] shadow-custom w-32 h-32 mb-4 flex justify-center items-center'>
        <Link>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
            alt='Bulbasaur'
            className='w-28 h-28 rounded-full overflow-hidden bg-white'
          />
        </Link>
      </div>
      <div className='rounded-xl bg-[#c1c1c1] shadow-custom flex flex-col items-center'>
        <h2>Number</h2>
        <h2>Name</h2>
        <h2>Type</h2>
      </div>
    </div>
  )
}
