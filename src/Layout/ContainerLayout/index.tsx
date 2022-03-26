import { connect } from 'react-redux'
import { LoadCartRequestAction, LoadProductRequestAction } from 'reducers/loadingReducer';
import { AppDispatch, RootState } from 'types/commonTypes';
import Cart from '../../Pages/Cart';
import ContainerLayout from './ContainerLayout'
const mapStateToProps = ({cart,products}: RootState) => ({
    quantity: cart.reduce((p, c) => p + c.quantity, 0),
    cart,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    loadProducts: () => dispatch(LoadProductRequestAction()),
    loadCart: () => dispatch(LoadCartRequestAction()),

})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLayout);