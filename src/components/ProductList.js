import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.scss'

function ProductList({ products, formIsOpen }) {
  return (
    <div className="product-list" style={{ flex: formIsOpen ? '1.25' : '0.98' }}>
      {products.map(product => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}

export default ProductList
