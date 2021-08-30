import React from 'react';
import { ProductType } from './types';
import { AdjustmentAction } from './reducer/products';
import reducer from './reducer/products';
import axios from 'axios';

import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from './actions/products';

interface ProductContextType extends ProductType {
  dispatch: React.Dispatch<AdjustmentAction>;
}

const initialState: ProductType = {
  loading: false,
  error: null,
  productSale: [],
  productNew: [],
  productFeatured: []
};

const ProductContext = React.createContext<ProductContextType>(initialState as ProductContextType);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchDataProducts = async () => {
    try {
      dispatch({ type: GET_PRODUCTS_BEGIN });
      const { data } = await axios.get('https://node-halipay.herokuapp.com/api/products');
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
    }
  };

  React.useEffect(() => {
    fetchDataProducts();
  }, []);

  return <ProductContext.Provider value={{ ...state, dispatch }}>{children}</ProductContext.Provider>;
};

export const useProductsContext = () => {
  return React.useContext(ProductContext);
};
