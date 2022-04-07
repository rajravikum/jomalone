import { connect } from 'react-redux'
import { AppDispatch, RootState } from 'types/commonTypes';
import ProductList from './ProductList';

const mapStateToProps = ({ cart }: RootState) => ({
    cart
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);