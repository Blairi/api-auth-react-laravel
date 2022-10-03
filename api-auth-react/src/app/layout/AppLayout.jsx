
export const AppLayout = ({ children, title }) => {
  return (
    <div className="bg-indigo-500 min-h-screen grid place-items-center">
      <div className="w-[90%] max-w-[1200px]">

        <div className="flex justify-between items-center mb-5 bg-white p-5 rounded shadow">
          <h5 className="text-gray-500">Hello, Axel</h5>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
          >Logout</button>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h1 className='text-2xl border-b-4 border-indigo-500 inline-block mb-5'>{ title }</h1>
          { children }
        </div>


      </div>
    </div>
  )
}
