import React, { createContext, useReducer} from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
  updateProduct: '',
  updatePrice: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.addNewVal],
        updateProduct: '',
        updatePrice: "",
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        updateProduct: action.addNewVal,
      };
    case 'UPDATE_PRICE':
      return {
        ...state,
        updatePrice: action.addNewVal,
      };
    case "DELETE_ITEM" :
      return {
        ...state,
          products: state.products.filter((item) => item.id !== action.load)
      }
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <ProductContext.Provider value={{ state, dispatch ,length}}>
      {children}
    </ProductContext.Provider>
  );
};


export default ProductContext;

