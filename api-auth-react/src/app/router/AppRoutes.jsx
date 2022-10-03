import { Navigate, Route, Routes } from "react-router-dom"
import { CreateProduct, EditProduct, Home } from "../pages"

export const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/products/create" element={<CreateProduct />}/>
      <Route path="/products/:id" element={<EditProduct />}/>
        
    </Routes>
  )
}