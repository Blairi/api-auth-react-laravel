import { Link } from "react-router-dom"

export const ProductItem = ({ product }) => {
  return (
    <div className="bg-gray-300 p-2 rounded shadow">

      <span className="font-bold text-lg">{ product.name }</span>
      <p>Price: <span className="text-indigo-500 font-bold">${ product.price }</span></p>
      <p>Quantity: <span className="text-indigo-500 font-bold">{ product.quantity }</span></p>

      <div className="flex justify-end gap-3">
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
        >Delete</button>
        <Link
          className="bg-orange-500 px-5 py-1 text-white rounded"
          to={`/products/${product.id}`}
        >Edit</Link>
      </div>

    </div>
  )
}
