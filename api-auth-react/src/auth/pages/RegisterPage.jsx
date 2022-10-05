import { AuthLayout } from '../layout/AuthLayout'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { startCreatingUser } from '../../store/auth/thunks';

import { useForm } from '../../hooks';
import { ErrorMessage } from '../../ui/ErrorMessage';


const formData = {
  displayName: '',
  email: '',
  password: '',
  password_confirmation:'',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'Email should have @'],
  password: [ (value) => value.length >= 6 , 'Password should have minimum 6 characteres'],
  displayName: [ (value) => value.trim().length > 3 && value.trim().length < 50, 'Name should have between 3 and 50 characteres'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { errors, error } = useSelector( state => state.auth );

  const [passConfirmated, setPassConfirmated] = useState(false);

  const [submited, setSubmited] = useState(false);

  const {
    displayName, email, password, password_confirmation, 
    formState, onInputChange, isFormValid, 
    displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    
    setSubmited(true);

    if(!isFormValid || !passConfirmated) return;
    
    dispatch( startCreatingUser({ ...formState }) );
  }

  useEffect(() => {

    setPassConfirmated(formState.password_confirmation === formState.password);

  }, [password_confirmation, password]);

  
  return (
  
    <AuthLayout>

      {
        error && Object.keys(errors).map((key, index) => (
          <ErrorMessage key={ index } message={ errors[key] }/>
        ))
      }

      <h1 className='text-2xl font-bold'>Register</h1>
      <hr className='mb-3 border-violet-500 border-2'/>

      <form onSubmit={ onSubmit }>

        <div className='mb-3'>
          <label htmlFor="displayName" className='block text'>Name</label>
          <input 
            type="text" 
            name="displayName" 
            id="displayName"
            onChange={ onInputChange }
            value={ displayName }
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
          />
          {
            (!!displayNameValid && submited) && (
              <div className='bg-red-500 text-white p-1 rounded mt-2'>
                <p>{displayNameValid}</p>
              </div>
            )
          }
        </div>

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

        <div className='mb-3'>
          <label htmlFor="password_confirmation" className='block text'>Repeat Password</label>
          <input 
            type="password" 
            name="password_confirmation" 
            id="password_confirmation"
            value={ password_confirmation }
            onChange={ onInputChange }
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
          />
          {
            !passConfirmated && (
              <div className='bg-red-500 text-white p-1 rounded mt-2'>
                <p>{"Passwords don't match"}</p>
              </div>
            )
          }
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
