import { NavBar } from '../NavBar/NavBar'
import { Pokedexium } from '../Pokedexium/Pokedexium'
import { PokemonPreview } from '../PokemonPreview/PokemonPreview'

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className='mt-10 flex flex-col gap-y-8 items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5 xl:justify-between mx-auto justify-items-center'>
        <PokemonPreview />
      </main>
    </>
  )
}
