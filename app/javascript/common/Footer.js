import React, { createContext, useContext } from 'react'
import ProductContext from '../Context/ProductContext'

const Footer = () => {
  const {state} = useContext(ProductContext)
  
  return (
    <div>
       {state.products.length} {state.products.length > 1 ? "lists" : "list"}
    </div>
  )
}

export default Footer