import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginCard } from './components/LoginCard/LoginCard'
import { SignupCard } from './components/SignupCard/SignupCard'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/session/login' element={<LoginCard />} />
          <Route path='/session/signup' element={<SignupCard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
