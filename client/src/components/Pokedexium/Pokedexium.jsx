import { Link } from 'react-router-dom'

export const Pokedexium = () => {
  return (
    <div>
      <Link className='flex flex-col items-center' to='/home'>
        <div className=''>
          <img src='/images/pokemon-logo.svg' alt='pokemon-logo' aria-label='pokemon-logo' width='200' />
        </div>
        <div className='bg-[#fff] rounded-full w-fit p-2'>
          <h1 className='text-lg font-semibold italic'>Pokedexium</h1>
        </div>
      </Link>
    </div>
  )
}
