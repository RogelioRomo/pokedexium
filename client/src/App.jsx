import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginCard } from './components/LoginCard/LoginCard'
import { SignupCard } from './components/SignupCard/SignupCard'
import { HomePage } from './components/HomePage/HomePage'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginCard />} />
          <Route path='/signup' element={<SignupCard />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
