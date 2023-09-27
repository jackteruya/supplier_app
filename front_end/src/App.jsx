import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Categories from './pages/category/categories';
import CategoryFomr from './pages/category/categoriyForm';
import Supplier from './pages/supplier/suppliers';
import Product from './pages/product/products'


function App() {

  return (
    <>
    <Routes>
        <Route path='/category' element={<Categories />} />
        <Route path='/category/cadastrar' element={<CategoryFomr />} />
        <Route path='/supplier' element={<Supplier />} />
        <Route path='/product' element={<Product />} />
    </Routes>
    </>
  )
}

export default App
