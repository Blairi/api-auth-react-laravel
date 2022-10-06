import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { LoadingSpinner } from "../../ui/LoadingSpinner";
import { ProductList } from "../components/ProductList";
import { AppLayout } from "../layout/AppLayout"

export const Home = () => {


  const { loading } = useSelector(state => state.app);
  

  return (
    <AppLayout title='Home'>

      <div>

        <div className="flex justify-end mb-5">
          <Link
            className="bg-green-500 px-6 py-2 text-white font-bold rounded"
            to='/products/create'
          >Create</Link>
        </div>
        
        <div className={loading ? 'invert flex justify-center' : ''}>

          {
            loading
              ? <LoadingSpinner />
              : <ProductList />
          }

        </div>

      </div>
      
    </AppLayout>
  )
}
