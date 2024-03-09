import { NavBar } from '../NavBar/NavBar.jsx'
import { PokemonPreview } from '../PokemonPreview/PokemonPreview.jsx'

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
