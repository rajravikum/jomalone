import React, { memo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ProductType } from 'types/productsTypes';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import CheckoutCart from '../../Pages/CheckoutCart';

type Props = {
    quantity: number;
    products: ProductType[];
}
const ContainerLayout = ({ quantity,products }: Props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="container lg:p-12 mx-auto">
            <div className='fixed h-18 border-y-2 left-0 width-full top-0 bg-[#FCF8EF] right-0 z-20'>
                <a href="#" onClick={() => setVisible(!visible)} className="flex items-center p-8 float-right text-black">
                    <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="text-lg font-large font-bold"><sup>{quantity}</sup></span>
                    
                    {visible && <div className="overflow-x-auto border border-black border-solid absolute w-80 h-[450px] bg-white right-10 top-20">
                        <div>
                            <CheckoutCart></CheckoutCart>
                        </div>
                        <div className="sticky left-0 bottom-0 text-center text-white uppercase text-bold">
                            <a href= "/cart" className="bg-black border-solid block cursor-pointer w-full p-3 text-center text-white uppercase text-bold">
                                Checkout
                            </a>
                        </div>
                    </div>}          
                </a>
                <a href="#" className='items-center p-8 float-right text-black sm:hidden'>SHOP</a>
                <a href="#" className='items-center p-8 float-right text-black'>GIFTING</a>
                <a href="#" className='items-center p-8 float-right text-black'>HOME</a>
                                
            </div>
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <Outlet />
            </div>
        </div>
    );
};

export default memo(ContainerLayout);