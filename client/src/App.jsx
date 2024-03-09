import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginCard } from './components/LoginCard/LoginCard.jsx'
import { SignupCard } from './components/SignupCard/SignupCard.jsx'
import { HomePage } from './components/HomePage/HomePage.jsx'
import { PokemonCard } from './components/PokemonCard/PokemonCard.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginCard />} />
          <Route path='/signup' element={<SignupCard />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/lol' element={<PokemonCard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
