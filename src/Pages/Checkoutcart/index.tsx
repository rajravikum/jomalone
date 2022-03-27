import { connect } from 'react-redux'
import { LoadCartRequestAction, LoadProductRequestAction } from 'reducers/loadingReducer';
import { AppDispatch, RootState } from 'types/commonTypes';
import Checkoutcart from './Checkoutcart';
const mapStateToProps = ({ cart, products }: RootState) => ({
    cart,
    products: products.filter((product) => {
        return cart.find((cartItem) => {
            return product.id === cartItem.productId;
        })
    }),
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    loadProducts: () => dispatch(LoadProductRequestAction()),
    loadCart: () => dispatch(LoadCartRequestAction()),

})
export default connect(mapStateToProps, mapDispatchToProps)(Checkoutcart);