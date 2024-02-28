import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pokedexium } from '../Pokedexium/Pokedexium'

export const NavBar = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(window.matchMedia('(min-width: 1280px)').matches)

  useEffect(() => {
    const handleResize = () => {
      setBurgerMenuOpen(window.matchMedia('(min-width: 1280px)').matches)
    }

    window.addEventListener('resize', handleResize)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleBurgerMenuClick = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen)
  }

  return (
    <nav className='p-2 flex flex-col items-center xl:flex-row xl:justify-between border-b-2 border-solid border-white'>
      <Pokedexium className='lg:order-1' />

      <ul className='bg-[#fff] rounded-full w-fit h-[40px] p-2 mb-6 flex flex-row justify-around overflow-hidden items-center xl:mb-0 xl:order-3'>
        {isBurgerMenuOpen && (
          <div className='flex flex-row justify-around items-center overflow-hidden'>
            <li className='px-3 text-sm md:text-base'><Link to='/'>Home</Link></li>
            <li className='px-3 text-sm md:text-base'><Link to='/'>Challenge</Link></li>
            <li className='px-3 text-sm md:text-base'><Link to='/'>About</Link></li>
            <li className='px-1'><img src='/images/vertical-divider.svg' alt='divider' /></li>
          </div>
        )}
        <li className='flex px-1'>
          <button onClick={handleBurgerMenuClick}>
            <img className='min-w-6' src='/images/burger-menu.svg' alt='burger-menu' aria-label='burger-menu' width='24' />
          </button>
        </li>
        <li className='flex px-1'>
          <Link to='/'>
            <img className='min-w-6' src='/images/user-icon.svg' alt='profile' aria-label='profile' width='24' />
          </Link>
        </li>
      </ul>

      <div className='bg-[#fff] rounded-full p-2 flex flex-row justify-between overflow-hidden xl:order-2 xl:w-[40rem]'>
        <input className='px-2 outline-none xl:w-[35rem]' type='text' placeholder='Search...' />
        <div className='flex flex-row'>
          <img className='px-2 min-w-6' src='/images/vertical-divider.svg' alt='divider' aria-label='divider' />
          <button>
            <img className='min-w-6' src='/images/icon-filter.svg' alt='filter-icon' aria-label='filter-icon' width='24' />
          </button>
        </div>
      </div>
    </nav>
  )
}
