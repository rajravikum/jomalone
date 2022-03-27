import React from 'react';
import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';

type Props = {
    image: string;
    title: string;
    price: number;
    id: number;
    size: number;
    unit: string;
}
export type ProductProps = {
    deleteCartItem: (cartItem: CartType) => void;
    cartStatus: number;
} & ProductType;
const CheckoutProductList = ({ image, title, price, id, size, unit }: Props) => {
    return (<div className='mx-2 my-4 p-1.5 flex border-b border-b-gray-900'>
    <img src={image} alt="Test" className="w-20 float-left" />
    <div className="w-40 text-sm font-bold">
    {title} 
    </div>
    <div className="font-bold">
        {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        }).format(price)}
    </div>
</div>)
}

export default CheckoutProductList;