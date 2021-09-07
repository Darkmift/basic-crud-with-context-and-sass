import React, { useContext, useEffect } from 'react'
import ProductContext from './store/product-context'
import './App.scss';

import Navbar from './components/Navbar'
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const productCtx = useContext(ProductContext)

  useEffect(() => {
    document.title = productCtx.selectedProduct?.name || 'Main Page'
  }, [productCtx.selectedProduct]);

  const openForm = (e) => {
    e.preventDefault()
    productCtx.addProduct()
  }

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        {/* ADD NEW PRODUCT BUTTON */}
        <button className="btn btn-add" onClick={openForm}>Add +</button>
        <div className="list-form-container">
          <ProductList formIsOpen={productCtx.selectedProduct} products={productCtx.products} />
          {productCtx.selectedProduct && <ProductForm />}
        </div>
      </main>
    </div>
  );
}

export default App;
