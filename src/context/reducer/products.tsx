import { ProductType, Product } from '../types';
import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from '../actions/products';

type ActionType = typeof GET_PRODUCTS_BEGIN | typeof GET_PRODUCTS_SUCCESS | typeof GET_PRODUCTS_ERROR;

export type AdjustmentAction = {
  type: ActionType;
  payload?: any;
};

const products_reducer = (state: ProductType, action: AdjustmentAction): ProductType => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    const productSale = action.payload.filter((product: Product) => product.sale);
    const productNew = action.payload.filter((product: Product) => product.new);
    const productFeatured = action.payload.filter((product: Product) => product.featured);
    return {
      ...state,
      loading: false,
      productSale: productSale,
      productNew: productNew,
      productFeatured: productFeatured
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  }

  return state;
};

export default products_reducer;
