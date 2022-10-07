import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { startCreateProduct } from "../../store/app/thunks"
import { AppLayout } from "../layout/AppLayout"

const formData = {
  name: '',
  price: '',
  quantity: '',
}

const formValidations = {
  name: [ (value) => value.length !== 0, 'Name no valid'],
  price: [ (value) => value.length !== 0 , 'Price no valid'],
  quantity: [ (value) => value.length !== 0 , 'Quantity valid'],
}

export const CreateProduct = () => {

  const dispatch = useDispatch();

  const [submited, setSubmited] = useState(false);

  const {
    name, price, quantity,
    formState, onInputChange, isFormValid, 
    nameValid, priceValid, quantityValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();

    setSubmited(true);

    if(!isFormValid) return;
    
    dispatch( startCreateProduct({ ...formState }) );

  }

  return (
    <AppLayout title='Create Product'>
      <div className="grid place-items-center">

        <div className="mb-5">
          <Link
            className="bg-gray-500 px-6 py-2 text-white rounded"
            to='/'
          >Back</Link>
        </div>

        <div className="w-[90%] max-w-[500px]">
          <form onSubmit={ onSubmit }>

            <div className='mb-3'>
              <label htmlFor="name" className='block text'>Name</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                onChange={ onInputChange }
                value={ name }
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
              />
              {
                (!!nameValid && submited) && (
                  <div className='bg-red-500 text-white p-1 rounded mt-2'>
                    <p>{nameValid}</p>
                  </div>
                )
              }
            </div>

            <div className='mb-3'>
              <label htmlFor="price" className='block text'>Price</label>
              <input 
                type="number" 
                name="price" 
                id="price"
                onChange={ onInputChange }
                value={ price }
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
              />
              {
                (!!priceValid && submited) && (
                  <div className='bg-red-500 text-white p-1 rounded mt-2'>
                    <p>{priceValid}</p>
                  </div>
                )
              }
            </div>

            <div className='mb-3'>
              <label htmlFor="quantity" className='block text'>Quantity</label>
              <input 
                type="number" 
                name="quantity" 
                id="quantity"
                onChange={ onInputChange }
                value={ quantity }
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
              />
              {
                (!!quantityValid && submited) && (
                  <div className='bg-red-500 text-white p-1 rounded mt-2'>
                    <p>{quantityValid}</p>
                  </div>
                )
              }
            </div>

            <div className="w-full mt-5">
              <input 
                className="bg-green-500 py-2 text-white font-bold rounded w-full"
                type="submit" 
                value="Store" 
              />
            </div>

          </form>
        </div>

      </div>
    </AppLayout>
  )
}
