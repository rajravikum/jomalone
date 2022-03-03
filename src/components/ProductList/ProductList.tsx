import { XIcon } from '@heroicons/react/outline';
import { CartType } from 'types/cartTypes';
import React from 'react'
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
const ProductList = ({ image, title, price, id, size, unit, deleteCartItem }: Props) => {
    return (<div className="flex border p-10 rounded-md space-x-4 w-full item-center align-center">
        <div className='w-1/6 mr-2'>
            <img src={image} alt={title} className="w-20" />
        </div>
        <div className="w-full">
            <h2 className="text-xl font-bold mb-3">
                <a href={`/product/${id}`}>{title}</a>
            </h2>
            <div className='flex align-center item-center'>
                <p className="font-bold p-3 mr-3 border-r-2">
                    {size}<span className='lowercase'>{unit}</span>
                </p>
                <select className="mt-1 block w-1/6 py-2 px-3 border border-gray-300 bg-[#FCF9EE]">
                    {[...Array(6).keys()].map((x) => (
                        <option key={x} value={x + 1}>
                            {x + 1}
                        </option>
                    ))}
                </select>
                <p className="font-bold p-3 ml-3 border-l-2">
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(price)}
                </p>
                <p className="font-bold p-3 ml-3 border-l-2">
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(price)}
                </p>
            </div>
        </div>
        <div className="w-6" onClick={() => deleteCartItem(id)}>
            <XIcon />
        </div>
    </div>)
}

export default ProductList;