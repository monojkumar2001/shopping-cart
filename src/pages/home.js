import React from 'react'
import { products } from '../Data/product'
import ProductCart from '../components/productCart'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {
        products.map((item,index)=>(
          <ProductCart key={index} product={item}/> 
        ))
        }
      </div>
    </div>
  )
}

export default Home