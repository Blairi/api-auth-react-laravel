import { Link } from "react-router-dom"
import { AppLayout } from "../layout/AppLayout"

export const EditProduct = () => {
  return (
    <AppLayout title='Edit Product'>
      <div className="grid place-items-center">

        <div className="mb-5">
          <Link
            className="bg-gray-500 px-6 py-2 text-white rounded"
            to='/'
          >Back</Link>
        </div>

        <div className="w-[90%] max-w-[500px]">
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
              <label htmlFor="price" className='block text'>Price</label>
              <input 
                type="number" 
                name="price" 
                id="price"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="quantity" className='block text'>Quantity</label>
              <input 
                type="number" 
                name="quantity" 
                id="quantity"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'
              />
            </div>

            <div className="w-full mt-5">
              <input 
                className="bg-green-500 py-2 text-white font-bold rounded w-full"
                type="submit" 
                value="Update" 
              />
            </div>

          </form>
        </div>

      </div>
    </AppLayout>
  )
}
