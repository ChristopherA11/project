import React, {  useContext, useRef } from 'react'
import ProductContext from '../Context/ProductContext'



const ProductForm = () => {
  const inputRef = useRef()
  const {state,dispatch} = useContext(ProductContext)
  const handelAddProduct = (e)=>{
    e.preventDefault()
    const addProduct = {
        id: state.products.length + 1,
        updateProduct: state.updateProduct,
        updatePrice: state.updatePrice,
    }
    dispatch({type:"ADD_PRODUCT", addNewVal:addProduct})
}
  return (
    <form onSubmit={handelAddProduct}>
        <label htmlFor="Add Item">Add Item</label>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder='additem'
                        required
                        value={state.updateProduct} 
                        onChange={(e) => dispatch({type:"UPDATE_PRODUCT", addNewVal: e.target.value})}
                    />
        <label>Add price</label>            
                    <input 
                        
                        type="number"
                        placeholder='enter Price'
                        required
                        value={state.updatePrice}
                        onChange={(e) => dispatch({type:"UPDATE_PRICE", addNewVal:e.target.value})}
                     />
                     <button type='submit' onClick={() => inputRef.current.focus()} >Add</button>
    </form>
  )
}

export default ProductForm