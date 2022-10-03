import { Link } from 'react-router-dom'

import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout>

      <h1 className='text-2xl font-bold'>Login</h1>
      <hr className='mb-3 border-violet-500 border-2'/>

      <form>

        <div className='mb-3'>
          <label htmlFor="email" className='block text'>Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor="password" className='block text'>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
          />
        </div>

        <div className='flex justify-end'>
          <input 
            type="submit" 
            value="Login" 
            className='bg-violet-500 text-white font-bold uppercase py-2 px-10 rounded'
          />
        </div>

      </form>

      <div>
        <Link
          to="/auth/register"
          className='text-violet-500'
        >Create Account</Link>
      </div>

    </AuthLayout>
  )
}
