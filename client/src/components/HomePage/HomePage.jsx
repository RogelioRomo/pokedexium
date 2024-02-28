import { NavBar } from '../NavBar/NavBar'
import { Pokedexium } from '../Pokedexium/Pokedexium'
import { PokemonPreview } from '../PokemonPreview/PokemonPreview'

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className='mt-10'>
        <PokemonPreview />
      </main>
    </>
  )
}
