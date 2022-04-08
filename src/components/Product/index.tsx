import Product, { ProductProps } from './Product';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from 'types/commonTypes';
import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';
import {
  AddCartItemRequestAction,
  deleteCartItemRequestAction,
  UpdateCartItemRequestAction,
} from 'reducers/loadingReducer';

const mapStateToProps = (state: RootState, props: ProductType) => ({
  cartItem: state.cart?.find((x) => x.productId === props.id),
  addLoading: state.loading[`ADD_CART_ITEM_${props.id}`],
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addCartItem: (productId: number) =>
    dispatch(AddCartItemRequestAction(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
