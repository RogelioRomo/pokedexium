import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pokedexium } from '../Pokedexium/Pokedexium'

export const NavBar = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)

  const handleBurgerMenuClick = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen)
  }

  return (
    <nav className='flex flex-row items-center justify-between'>
      <Pokedexium />
      <div className='bg-[#fff] rounded-full  p-2 flex flex-row'>
        <input className='px-2 w-[70rem]' type='text' placeholder='Search...' />
        <img className='px-2' src='/images/vertical-divider.svg' alt='divider' aria-label='divider' />
        <img className='' src='/images/icon-filter.svg' alt='filter-icon' aria-label='filter-icon' width='24' />
      </div>
      <ul className='bg-[#fff] rounded-full w-fit p-2 flex flex-row justify-around'>
        {isBurgerMenuOpen && (
          <>
            <li className='px-3'><Link to='/'>Home</Link></li>
            <li className='px-3'><Link to='/'>Challenge</Link></li>
            <li className='px-3'><Link to='/'>About us</Link></li>
            <li className='flex items-center px-1'><img src='/images/vertical-divider.svg' alt='divider' /></li>
          </>
        )}
        <li className='flex items-center px-1'>
          <button onClick={handleBurgerMenuClick}>
            <img src='/images/burger-menu.svg' alt='burger-menu' aria-label='burger-menu' width='24' />
          </button>
        </li>
        <li className='flex items-center px-1'>
          <Link to='/'>
            <img src='/images/user-icon.svg' alt='profile' aria-label='profile' width='24' />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
