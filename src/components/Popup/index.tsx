import { connect } from 'react-redux'
import { AddCartItemRequestAction } from 'reducers/loadingReducer';
import { AppDispatch } from 'types/commonTypes';
import Popup from './Popup';
const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    addCartItem: (productId: number) => dispatch(AddCartItemRequestAction(productId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Popup);