
export const AuthLayout = ({ children }) => {
  return (
    <div className="bg-violet-600 min-h-screen grid place-items-center">
      <div className="bg-white rounded w-[90%] max-w-[500px] shadow px-5 py-7">
        { children }
      </div>
    </div>
  )
}
