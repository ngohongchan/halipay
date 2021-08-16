import { AnyAction } from 'redux';
import { ProductTypes } from '../actions-types/products.types';

type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  new: boolean;
  sale: boolean;
  price: number;
  countInStock: number;
  rating: number;
  reviews: [];
  numReviews: number;
};

interface ProductState {
  loading: boolean;
  error: string | null;
  products: Product[] | null;
}

const initialState = {
  loading: false,
  error: null,
  products: null
};

export const ProductReducer = (state: ProductState = initialState, action: AnyAction): ProductState => {
  switch (action.type) {
    case ProductTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ProductTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload.products
      };
    case ProductTypes.PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: []
      };
    default:
      return state;
  }
};
