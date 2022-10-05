import './spinner.css';

export const CheckingAuth = () => {
  return (
    <div className="min-h-screen bg-purple-500 grid place-items-center">
      
      {/* Spinner */}
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
