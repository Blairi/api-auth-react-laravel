import { LoadingSpinner } from "./LoadingSpinner"

export const CheckingAuth = () => {
  return (
    <div className="min-h-screen bg-purple-500 grid place-items-center">
      
      {/* Spinner */}
      <LoadingSpinner />
    </div>
  )
}
