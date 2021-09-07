import React, { useState, useContext } from 'react'
import ProductsContext from '../store/product-context'

import './ProductCard.scss'

function ProductCard({ product }) {

  const productsCtx = useContext(ProductsContext)

  // animation related state
  const [isFadingOut, setIsFadingOut] = useState(false);

  const baseCssClasses = 'product-card container'
  const conditionalCssClasses =
    (isFadingOut ? 'fade-out ' : 'fade-in ') +
    (product.id === productsCtx?.selectedProduct?.id ? baseCssClasses + ' mark' : baseCssClasses)

  const removeProduct = (evt) => {

    evt.stopPropagation()
    setIsFadingOut(true)

    setTimeout(() => {
      productsCtx.removeProduct(product.id)
      setIsFadingOut(false)
    }, 300)
  }

  const onEditProduct = (evt) => {
    productsCtx.addProduct(product)
  }

  return (
    <div className={conditionalCssClasses}
      onClick={onEditProduct}>
      <div className="img-content-wrapper">
        <img src={product.imgUrl} alt={product.name} />
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
      <button className="btn btn-delete" onClick={(evt) => removeProduct(evt)}>Delete</button>

    </div>
  )
}

export default ProductCard
