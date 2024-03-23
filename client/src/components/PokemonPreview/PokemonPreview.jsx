import './PokemonPreview.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Loader } from '../Loader/Loader.jsx'
import Modal from 'react-modal'
import { PokemonCard } from '../PokemonCard/PokemonCard.jsx'

export const PokemonPreview = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const handleOpenModal = (pokemon) => {
    setSelectedPokemon(pokemon)
    setIsModalOpen(true)
  }

  const handleCloseModal = (event) => {
    event.stopPropagation()
    setIsModalOpen(false)
  }

  if (!data) {
    return (
      <div className=''>
        <Loader />
      </div>
    )
  }

  return (
    <>
      <div onClick={() => handleOpenModal(data)} className='card cursor-pointer'>
        <div className='top-section'>
          <div className='border' />
          <div className='icons'>
            <div className='logo'>
              <img src='/images/pokeball.svg' alt='pokeball' />
            </div>
            <div className='pokemonNumber'>
              <span># {data.number}</span>
            </div>
          </div>
          <div className='image-section'>
            <img className='image-size' src={data.image} alt={`${data.name}`} title={`${data.name}`} />
          </div>
        </div>
        <div className='bottom-section'>
          <span className='title'>{data.name}</span>
          <div className='row'>
            <div className='item'>
              <span className='big-text'>Gen</span>
              <span className='xl-text'>{data.generation.split('generation-')}</span>
            </div>
            <div className='item'>
              <span className='big-text'>Type</span>
              <span className='regular-text'>{data.types.join(' & ')}</span>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen} onRequestClose={handleCloseModal} ariaHideApp={false} style={{
          overlay: {
            backgroundColor: '#0d0d0d',
            backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/inspiration-geometry.png\')'
          },
          content: {
            border: 'none',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      >
        <div>
          <button onClick={(event) => handleCloseModal(event)} className='absolute top-0 right-0 m-4 bg-custom-gray-2 text-[#fff] rounded-full p-4'>Close</button>
          <PokemonCard pokemon={selectedPokemon} />
        </div>
      </Modal>
    </>
  )
}

PokemonPreview.propTypes = {
  data: PropTypes.object.isRequired
}
