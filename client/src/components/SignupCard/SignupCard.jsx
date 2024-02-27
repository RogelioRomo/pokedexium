import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const SignupCard = () => {
  useEffect(() => {
    const originalBackgroundImage = window.getComputedStyle(document.body).backgroundImage
    const originalBackgroundSize = window.getComputedStyle(document.body).backgroundSize

    document.body.style.backgroundImage = 'url(/images/background.png)'
    document.body.style.backgroundSize = 'cover'

    return () => {
      document.body.style.backgroundImage = originalBackgroundImage
      document.body.style.backgroundSize = originalBackgroundSize
    }
  }, [])
  return (
    <main className='flex items-center justify-center h-screen'>
      <form className='flex flex-col items-center bg-white border-solid border-8 border-[#0071b9] rounded-lg p-4'>
        <h1 className='p-4 hidden'>Signup</h1>
        <img className='' src='/images/pokemon-logo.svg' alt='classic pokemon logo' />
        <div className='flex flex-row p-2 mb-2 border-solid border-b-2'>
          <img className='w-6' src='/images/username.svg' alt='username' />
          <input className='border-solid rounded-lg ml-3 p-2' type='text' id='username' name='username' placeholder='Enter your username' required />
        </div>
        <div className='flex flex-row p-2 mb-2 border-solid border-b-2'>
          <img className='w-6' src='/images/email.svg' alt='email' />
          <input className='border-solid rounded-lg ml-3 p-2' type='email' id='email' name='email' placeholder='Enter your email' required />
        </div>
        <div className='flex flex-row p-2 mb-2 border-solid border-b-2'>
          <img className='w-6' src='/images/password.svg' alt='password' />
          <input className='border-solid rounded-lg ml-3 p-2' type='password' id='password' name='password' placeholder='Enter your password' required />
        </div>
        <button className='my-10' type='submit' title='signup' aria-label='signup'>
          <img src='/images/pokeball.svg' alt='signup' />
        </button>
        <Link to='/login' className='text-[#000]'>Return to <span className='underline'>Login</span></Link>
      </form>
    </main>
  )
}
