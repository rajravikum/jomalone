import { connect } from 'react-redux'
import { AddCartItemRequestAction } from 'reducers/loadingReducer';
import { LoadCartRequestAction, LoadSingleProductRequestAction } from 'reducers/loadingReducer';
import { AppDispatch, RootState } from 'types/commonTypes';
import SPP from './Spp';

const mapStateToProps = (store: RootState) => {
    return {
      products: store.products,
      loading: store.loading,
    };
  };

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
      loadSingleProduct: (productId: number) => dispatch(LoadSingleProductRequestAction(productId)),
      loadCart: () => dispatch(LoadCartRequestAction()),
      addCartItem: (productId: number) => dispatch(AddCartItemRequestAction(productId)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SPP);