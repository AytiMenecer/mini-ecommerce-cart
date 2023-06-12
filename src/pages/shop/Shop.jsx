import React from 'react'
import { products } from '../../products'
import Product from './Product'


const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Tech shop</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop
