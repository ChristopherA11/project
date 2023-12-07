import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Header from './Header';
import { ProductProvider } from '../Context/ProductContext';
import Footer from './Footer';




function App(){
  

  return (
    <div>
      <ProductProvider>
            <Header title="Product list"/>
            <ProductList  />         
            <ProductForm  />  
            <Footer  />
            </ProductProvider>
    </div>
  );
};

export default App;
