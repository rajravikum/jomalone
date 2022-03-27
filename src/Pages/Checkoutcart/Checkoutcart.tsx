import Panel from '@components/Panel/Panel';
import React, { memo, useEffect } from 'react';
import { ProductType } from 'types/productsTypes';
import CheckoutProductList from '@components/CheckoutProductList';

type Props = {
    loadCart: () => void;
    loadProducts: () => void;
    products: ProductType[];
}

const Checkoutcart = ({ loadCart, loadProducts, products }: Props) => {
    useEffect(() => {
        loadCart();
        loadProducts();
    }, [loadCart, loadProducts]);
    const subtotal = products.reduce((prev, next) => prev + next.price, 0);
    const totalCount = products.length;
    return (
        <div className="container mx-auto">
            <h1 className='text-center font-bold text-3xl'>Shopping Bag({totalCount})</h1>
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <div className="md:pt-0 2xl:ps-4">
                        <div className="mt-2">
                            <div className="flex flex-col space-y-4">
                                {products.map((item) => {
                                    return (<CheckoutProductList size={0} unit={''} key={item.id} {...item} />)
                                })}
                                <div className='text-xl font-bold ml-4'>Total : <span className='float-right mr-2'>{subtotal}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Checkoutcart);