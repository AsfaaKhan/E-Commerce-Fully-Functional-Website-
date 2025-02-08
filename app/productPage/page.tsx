"use client"
import 'react-loading-skeleton/dist/skeleton.css'
import ProductPage from '../components/ProductCart'


const Products = () => {
  return (
    <div>
      <div className="flex flex-col mt-20 mb-20 ">
        
        <div className= " container flex flex-col justify-center items-center text-center gap-[10px ] my-10">
          <h1 className="text-2xl font-bold text-center my-8 mt-24 ">Shop </h1>
        </div>
        <ProductPage/>
      </div>
    </div>
  )
}

export default Products
