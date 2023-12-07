import React, {  useContext } from 'react'
import ProductContext from '../Context/ProductContext'


const ProductList = () => {
  const {state,dispatch} = useContext(ProductContext)
  return (
    <div>
        {state.products.length ? (
        <ul>
        {state.products.map((product) => (
            <li key={product.id}>
               <strong>{product.updateProduct} {product.updatePrice}</strong> 
               <button onClick={() => dispatch({type:"DELETE_ITEM",load:product.id})}>delete</button>
            </li>
        ))}
    </ul>
        ): (
            <p>Empty List</p>
        )}
    </div>
  )
}

export default ProductList