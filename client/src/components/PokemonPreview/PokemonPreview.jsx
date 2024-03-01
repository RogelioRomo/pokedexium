import { Link } from 'react-router-dom'
import './PokemonPreview.css'

export const PokemonPreview = () => {
  return (
    <div className='card'>
      <div className='top-section'>
        <div className='border' />
        <div className='icons'>
          <div className='logo'>
            <img src='/images/pokeball.svg' alt='pokeball' />
          </div>
          <div className='pokemonNumber'>
            <span>#001</span>
          </div>
        </div>
      </div>
      <div className='bottom-section'>
        <span className='title'>Pokemon Name</span>
        <div className='row row1'>
          <div className='item'>
            <span className='big-text'>Gen</span>
            <span className='regular-text'>I</span>
          </div>
          <div className='item'>
            <span className='big-text'>Type</span>
            <span className='regular-text'>Plant</span>
          </div>
          <div className='item'>
            <span className='big-text'>Type</span>
            <span className='regular-text'>Venom</span>
          </div>
        </div>
      </div>
    </div>
  )
}
