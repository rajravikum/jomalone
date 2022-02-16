import { AxiosResponse } from 'axios';
import { LOAD_PRODUCTS_REQUEST, LOAD_SINGLE_PRODUCT_REQUEST } from 'constants/actionTypes';
import { useParams } from 'react-router-dom';
import { AddCartItemRequestActionType } from 'reducers/actionTypes';
import { LoadProductErrorAction } from 'reducers/errorReducer';
import { LoadProductsSuccess } from 'reducers/productsReducer';
import { takeEvery, call, put } from 'redux-saga/effects';
import { ProductType } from 'types/productsTypes';
import axiosInstance from 'utils/axios';

function* loadProducts() {
  try {
    const res: AxiosResponse<ProductType[]> = yield call(
      axiosInstance.get,
      'products',
    );
    yield put(LoadProductsSuccess(res.data));
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    yield put(LoadProductErrorAction(message));
  }
}
function* loadSingleProduct({ processId,
}: AddCartItemRequestActionType) {
  try {
    const res: AxiosResponse<ProductType[]> = yield call(
      axiosInstance.get,
      `products/${processId}`,
    );
    yield put(LoadProductsSuccess(res.data));
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    yield put(LoadProductErrorAction(message));
  }
}
export default function* rootProducts() {
  yield takeEvery(LOAD_PRODUCTS_REQUEST, loadProducts);
  yield takeEvery(LOAD_SINGLE_PRODUCT_REQUEST, loadSingleProduct);
}

