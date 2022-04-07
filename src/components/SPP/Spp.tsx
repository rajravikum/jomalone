import React, { memo, useEffect } from 'react';
import Rating from '@components/Rating';
import { ProductType } from 'types/productsTypes';
import './Spp.css';

export type ProductProps = {
    addCartItem: (productId: number) => void;
    cartStatus: number;
    products: ProductType[];
    loadSingleProduct: (id: number,) => void;
    loadCart: () => void;
} & ProductType;


const SPP = ({ title, price, rating, description, image, id,
     addCartItem, cartStatus, size, unit }: ProductProps) => {
    return (
            <div className="flex w-full flex-col lg:flex-row sm:h-[800px]">
                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg p-5 lg:w-1/2">
                    <img
                        src={image}
                        alt={title}
                        className="lg:w-2/3 object-center object-cover"
                    />
                </div>
                <div className="lg:p-16 lg:w-1/2 relative">
                    <div className="lg:col-span-2 lg:pr-8 mb-4 sm:text-center">
                        <h1 className="text-2xl font-extrabold tracking-tight sm:text-center text-gray-900 sm:text-3xl">{title}</h1>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:row-span-3 sm:text-center">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(price)}
                            <span className='lowercase text-lg ml-4'>({size}{unit})</span>
                        </p>
                        <div className="mt-6 sm:text-center">
                            <h3 className="sr-only">Reviews</h3>
                            <Rating {...rating} />
                        </div>
                    </div>
                    <select className="mt-1 block md:w-2/6 py-2 px-3 sm:text-center w-full border border-gray-300 bg-[#FCF9EE]">
                        {[...Array(6).keys()].map((x) => (
                            <option key={x} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                    <div className="space-y-6 sm:text-center">
                        <p className="text-base text-gray-900 md:my-24 lg:m-0">{description}</p>
                    </div>
                    <div className="fixed md:absolute left-0 bottom-0 w-full text-center md:w-1/2 md:right-0 md:left-auto md:mt-5 text-white uppercase text-bold">
                        {cartStatus === -1 ?
                            <a onClick={() => addCartItem(id)} className="bg-black border-solid block cursor-pointer w-full p-3 text-center text-white uppercase text-bold">
                                Add to cart
                            </a>
                            :
                            <p className="bg-gray-200 border-solid block border-2 border-zinc-200 left-0 bottom-0 w-full p-3 text-center text-black uppercase text-bold">Added to Cart</p>
                        }
                    </div>
                </div>
            </div>
    )
}

export default memo(SPP);