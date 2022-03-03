import ProductListingItem from '@components/ProductList/ProductList';
import Product from 'components/Product/Product';
import Panel from '@components/Panel/Panel';
import React, { memo, useEffect } from 'react';
import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';
import ProductList from '@components/ProductList';

type Props = {
    loadCart: () => void;
    loadProducts: () => void;
    products: ProductType[];
}

const Cart = ({ loadCart, loadProducts, products }: Props) => {
    useEffect(() => {
        loadCart();
        loadProducts();
    }, [loadCart, loadProducts]);
    const subtotal = products.reduce((prev, next) => prev + next.price, 0);
    const shippingCharge = 15;
    const offerDiscount = 0;
    const total = offerDiscount ? (subtotal + shippingCharge) - offerDiscount : (subtotal + shippingCharge);
    const totalCount = products.length;
    const priceData = {
        subtotal,
        shippingCharge,
        total,
        totalCount,
    };
    return (
        <div className="container p-12 mx-auto">
            <h1 className='text-center font-bold text-3xl'>Shopping Bag</h1>
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <div className="mt-8">
                            <div className="flex flex-col space-y-4">
                                {products.map((item) => {
                                    return (<ProductList key={item.id} {...item} />)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-3/5 mx-auto sm:w-[23.4375rem]">
                    <Panel {...priceData} />
                </div>
            </div>
        </div>
    )
}

export default memo(Cart);