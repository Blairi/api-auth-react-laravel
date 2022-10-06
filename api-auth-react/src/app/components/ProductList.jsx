import { useSelector } from "react-redux"
import { ProductItem } from "./ProductItem";

export const ProductList = () => {

  const { products } = useSelector(state => state.app);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {
        products.map((product, index) => (
          <ProductItem product={ product } key={ index }/>
        ))
      }
    </div>
  )
}
