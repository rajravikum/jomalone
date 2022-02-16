import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadSingleProductRequestAction } from 'reducers/loadingReducer';
import { CartType } from 'types/cartTypes';
import { AppDispatch, RootState } from 'types/commonTypes';
import { ProductType } from 'types/productsTypes';
import SingleProduct from './SingleProduct';

const mapStateToProps = (store: RootState) => {
    return {
        products: store.products,

    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        loadSingleProduct: (productId: number) =>
            dispatch(LoadSingleProductRequestAction(productId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);