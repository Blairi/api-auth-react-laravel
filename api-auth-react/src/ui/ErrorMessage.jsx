
export const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-500 text-white p-3 rounded">
      <span>Error</span>
      <p className="text-lg font-bold">{ message }</p>
    </div>
  )
}
