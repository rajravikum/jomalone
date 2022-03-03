import React from 'react';
import { Outlet } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/outline';
type Props = {
    quantity: number;
}
const ContainerLayout = ({
    quantity
}: Props) => {
    return (
        <div className="container lg:p-12 mx-auto">
            <div className='fixed h-18 border-y-2 left-0 width-full top-0 bg-[#FCF8EF] right-0 z-20'>
                <a href="#" className='items-center p-8 float-left text-black'>SHOP</a>
                <a href="#" className='items-center p-8 float-left text-black'>GIFTING</a>
                <a href="#" className='items-center p-8 float-left text-black'>STORES</a>
                <a href="#" className='items-center p-8 float-left text-black'>OUR HOUSE</a>
                <a href="/cart" className="flex items-center p-8 float-right text-black">
                    <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="text-lg font-large font-bold"><sup>{quantity}</sup></span>
                </a>
            </div>
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <Outlet />
            </div>
        </div>
    );
};

export default ContainerLayout;