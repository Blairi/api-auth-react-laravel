import { Link } from 'react-router-dom'

import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <h1 className='text-2xl font-bold'>Register</h1>
      <hr className='mb-3 border-violet-500 border-2'/>

      <form>

        <div className='mb-3'>
          <label htmlFor="name" className='block text'>Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
          />
        </div>

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

        <div className='mb-3'>
          <label htmlFor="password_confirmation" className='block text'>Repeat Password</label>
          <input 
            type="password" 
            name="password_confirmation" 
            id="password_confirmation"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
          />
        </div>

        <div className='flex justify-end'>
          <input 
            type="submit" 
            value="Register" 
            className='bg-violet-500 text-white font-bold uppercase py-2 px-10 rounded'
          />
        </div>

      </form>

      <div>
        <Link
          to="/auth/login"
          className='text-violet-500'
        >Login</Link>
      </div>
    </AuthLayout>    
  )
}
