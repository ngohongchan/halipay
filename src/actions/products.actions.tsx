import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ProductTypes } from '../actions-types/products.types';

export const listProduct = (page = 1, category?: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: ProductTypes.PRODUCT_LIST_REQUEST });

      let response;

      response = await axios.get(`https://node-halipay.herokuapp.com/api/products?page=${page}`);

      if (category) {
        response = await axios.get(`https://node-halipay.herokuapp.com/api/products?page=${page}&category=${category}`);
      }

      dispatch({ type: ProductTypes.PRODUCT_LIST_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: ProductTypes.PRODUCT_LIST_FAIL,
        payload: error.respone && error.response ? error.response.data.message : error.message
      });
    }
  };
};
