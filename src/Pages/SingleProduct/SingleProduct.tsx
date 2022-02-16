import Breadcrumb from '@components/Breadcrumbs';
import React, { memo, useEffect } from 'react'
import SPP from '@components/SPP';
import { ProductType } from 'types/productsTypes';
import { useParams } from 'react-router-dom';
type Props = {
    products: ProductType[];
    loadSingleProduct: (
        id: number,
    ) => void;
};

const SingleProduct = ({ products, loadSingleProduct }: Props) => {
    const { id } = useParams() as any;
    useEffect(() => {
        loadSingleProduct(id);
    }, [loadSingleProduct]);

    return (
        <div className="bg-white">
            <div className="pt-6">
                {Object.keys(products).length > 0 &&
                    <SPP  {...products} />
                }
            </div>
        </div>
    )
}

export default memo(SingleProduct);