import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';
import {
  CartItemSuccess,
  ErrorActionType,
  LoadCartSuccessActionType,
  LoadProductSuccessActionType,
  RequestActionType,
} from './actionTypes';
import cartReducer from './cartReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import productReducer from './productReducer';
import productsReducer from './productsReducer';

export type RootReducerType = {
  products: ProductType[];
  cart: CartType[];
  error: any;
  loading: any;
  product: ProductType[];
};

export const rootInitialState = {
  products: [],
  cart: [],
  error: {},
  loading: {},
  product: []
};

export type RootAction =
  | LoadProductSuccessActionType
  | LoadCartSuccessActionType
  | CartItemSuccess
  | RequestActionType
  | ErrorActionType;

export default (
  state: RootReducerType,
  action: RootAction,
): RootReducerType => {
  return {
    cart: cartReducer(
      state.cart,
      action as LoadCartSuccessActionType | CartItemSuccess,
    ),
    products: productsReducer(
      state.products,
      action as LoadProductSuccessActionType,
    ),
    loading: loadingReducer(state.loading, action as RequestActionType),
    error: errorReducer(state.error, action as ErrorActionType),
    product: productReducer(state.product, action as LoadProductSuccessActionType)
  };
};
