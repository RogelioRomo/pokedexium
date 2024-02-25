import { Link } from 'react-router-dom'

export const LoginCard = () => {
  return (
    <section className='flex items-center justify-center h-screen'>
      <form className='flex flex-col items-center bg-white border-solid border-8 border-[#0071b9] rounded-lg p-4'>
        <h1 className='p-4 hidden'>Pokedexium</h1>
        <img className='' src='/images/pokemon-logo.svg' alt='classic pokemon logo' />
        <div className='flex flex-row p-2 mb-2 border-solid border-b-2'>
          <img className='w-6' src='/images/email.svg' alt='email' />
          <input className='border-solid rounded-lg ml-3 p-2' type='email' id='email' name='email' placeholder='Enter your email' required />
        </div>
        <div className='flex flex-row p-2 mb-2 border-solid border-b-2'>
          <img className='w-6' src='/images/password.svg' alt='password' />
          <input className='border-solid rounded-lg ml-3 p-2' type='password' id='password' name='password' placeholder='Enter your password' required />
        </div>
        <button className='my-10' type='submit' title='login'>
          <img src='/images/pokeball.svg' alt='login' />
        </button>
        <Link to='/session/signup' className='text-[#0071b9]'>Don't have an account? Sign up</Link>
      </form>
    </section>
  )
}
