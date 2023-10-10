import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home';
import Categories from './pages/category/categories';
import CategoryForm from './pages/category/categoryForm';
import Supplier from './pages/supplier/suppliers';
import Product from './pages/product/products';
import ProductForm from './pages/product/productForm';


function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Categories />} />
            <Route path='/category/cadastrar' element={<CategoryForm />} />
            <Route path='/supplier' element={<Supplier />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/cadastrar' element={<ProductForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
