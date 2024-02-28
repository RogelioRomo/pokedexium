import { Link } from 'react-router-dom'

export const Pokedexium = () => {
  return (
    <div>
      <Link to='/home'>
        <img className='min-w-[200px]' src='/images/pokemon-logo.svg' alt='pokemon-logo' aria-label='pokemon-logo' width='200' />
      </Link>
      <h1 className='hidden'>Pokedexium</h1>
    </div>
  )
}
