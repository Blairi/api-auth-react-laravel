import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AuthLayout } from '../layout/AuthLayout'
import { ErrorMessage } from '../../ui/ErrorMessage'
import { useForm } from '../../hooks'
import { startLogin } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'Email should have @'],
  password: [ (value) => value.length >= 6 , 'Password should have minimum 6 characteres'],
}

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { errorMessage, error } = useSelector( state => state.auth );

  const [submited, setSubmited] = useState(false);

  const {
    email, password, 
    formState, onInputChange, isFormValid, 
    emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();

    setSubmited(true);

    if(!isFormValid) return;
    
    dispatch( startLogin({ ...formState }) )

  }

  return (
    <AuthLayout>

      {
        error && <ErrorMessage message={ errorMessage }/>
      }

      <h1 className='text-2xl font-bold'>Login</h1>
      <hr className='mb-3 border-violet-500 border-2'/>

      <form onSubmit={ onSubmit }>

        <div className='mb-3'>
          <label htmlFor="email" className='block text'>Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={ email }
            onChange={ onInputChange }
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
          />
          {
            (!!emailValid && submited) && (
              <div className='bg-red-500 text-white p-1 rounded mt-2'>
                <p>{emailValid}</p>
              </div>
            )
          }
        </div>

        <div className='mb-3'>
          <label htmlFor="password" className='block text'>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={ password }
            onChange={ onInputChange }
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
          />
          {
            (!!passwordValid && submited) && (
              <div className='bg-red-500 text-white p-1 rounded mt-2'>
                <p>{passwordValid}</p>
              </div>
            )
          }
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
