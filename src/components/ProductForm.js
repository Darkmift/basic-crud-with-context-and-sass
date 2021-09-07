import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../store/product-context'

import './ProductForm.scss'

function ProductForm() {
  const productCtx = useContext(ProductContext)
  const { selectedProduct, saveProduct } = productCtx;

  const [formData, setFormData] = useState({ ...selectedProduct });

  useEffect(() => {
    setFormData(selectedProduct)
  }, [selectedProduct])


  const updateFormData = (ev) => {
    const productCopy = { ...formData }
    productCopy[ev.target.name] = ev.target.value;
    setFormData(prevFormData => productCopy)
  }

  return (
    <form className="product-form">
      <img src={formData.imgUrl} alt={formData.name} />
      <div className="input-container">
        <span>Name</span>
        <input type="text" name="name" value={formData.name} onChange={updateFormData} />
      </div>
      <div className="input-container">
        <span>Description</span>
        <input type="text" name="description" value={formData.description} onChange={updateFormData} />
      </div>
      <div className="input-container">
        <span>Price</span>
        <input className="input-price" type="number" name="price" value={formData.price} onChange={updateFormData} />
      </div>

      <div className="btn-container">
        <button className="btn submit-btn" onClick={(evt) => {
          evt.preventDefault()
          saveProduct(formData)
        }}>Save</button>

        <button className="btn cancel-btn" onClick={(evt) => {
          evt.preventDefault()
          saveProduct(null)
        }}>Cancel</button>
      </div>
    </form>
  )
}

export default ProductForm
