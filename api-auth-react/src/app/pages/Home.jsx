import { Link } from "react-router-dom"
import { AppLayout } from "../layout/AppLayout"

export const Home = () => {
  return (
    <AppLayout title='Home'>

      <div>

        <div className="flex justify-end mb-5">
          <Link
            className="bg-green-500 px-6 py-2 text-white font-bold rounded"
            to='/products/create'
          >Create</Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          <div className="bg-gray-300 p-2 rounded shadow">

            <span className="font-bold text-lg">Laptop</span>
            <p>Price: <span className="text-indigo-500 font-bold">$17,500</span></p>
            <p>Quantity: <span className="text-indigo-500 font-bold">599</span></p>

            <div className="flex justify-end gap-3">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
              >Delete</button>
              <Link
                className="bg-orange-500 px-5 py-1 text-white rounded"
                to='/products/12'
              >Edit</Link>
            </div>

          </div>

          <div className="bg-gray-300 p-2 rounded shadow">

            <span className="font-bold text-lg">Laptop</span>
            <p>Price: <span className="text-indigo-500 font-bold">$17,500</span></p>
            <p>Quantity: <span className="text-indigo-500 font-bold">599</span></p>

            <div className="flex justify-end gap-3">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
              >Delete</button>
              <Link
                className="bg-orange-500 px-5 py-1 text-white rounded"
                to='/products/12'
              >Edit</Link>
            </div>

          </div>

          <div className="bg-gray-300 p-2 rounded shadow">

            <span className="font-bold text-lg">Laptop</span>
            <p>Price: <span className="text-indigo-500 font-bold">$17,500</span></p>
            <p>Quantity: <span className="text-indigo-500 font-bold">599</span></p>

            <div className="flex justify-end gap-3">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
              >Delete</button>
              <Link
                className="bg-orange-500 px-5 py-1 text-white rounded"
                to='/products/12'
              >Edit</Link>
            </div>

          </div>

        </div>

      </div>
      
    </AppLayout>
  )
}
