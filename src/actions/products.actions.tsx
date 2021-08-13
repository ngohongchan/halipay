import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ProductTypes } from '../actions-types/products.types';

export const ProductList = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: ProductTypes.PRODUCT_LIST_REQUEST });

      const response = await axios.get('https://node-halipay.herokuapp.com/api/products');
      console.log(response);
      // dispatch({ type: ProductTypes.PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ProductTypes.PRODUCT_LIST_FAIL,
        payload: error.respone && error.response ? error.response.data.message : error.message
      });
    }
  };
};
