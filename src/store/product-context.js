import React, { useState, useEffect } from 'react'
import ProductsJson from '../assets/data/products'
import ProductImgUrl from '../assets/images/productImg.png'

const ProductContext = React.createContext({
  products: [],
  selectedProduct: null,
  saveProduct: (product) => { },
  removeProduct: (product) => { },
  addProduct: () => { },
})

export const ProductContextProvider = (props) => {

  // manage product state
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(ProductsJson)
  }, []);

  // manage target product selected for crud operations
  const [selectedProduct, setSelectedProduct] = useState(null)

  const _newProduct = () => ({ id: null, name: 'Type new Name', description: '', imgUrl: ProductImgUrl, price: 99999 })

  const addProduct = (product) => {
    console.log('works')
    setSelectedProduct(product || _newProduct())
  }

  // CREATE/UPDATE
  const saveProduct = (product) => {
    console.log("🚀 ~ file: product-context.js ~ line 27 ~ saveProduct ~ product", product)

    if (!product) {
      setSelectedProduct(null)
      return
    }

    if (!product.id) {
      var uniqid = Date.now();
      product.id = uniqid;
      products.unshift(Object.assign(_newProduct(), product));
    } else {
      const idx = products.findIndex(p => p.id === product.id)
      products[idx] = product;
    }

    setProducts([...products])
    setSelectedProduct(null)
  }

  // DELETE
  const removeProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId))
  }

  const initialState = {
    products,
    selectedProduct,
    saveProduct,
    removeProduct,
    addProduct
  }

  return (
    <ProductContext.Provider value={initialState}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContext;