import React, { ChangeEvent, memo, useState } from 'react';
import { ProductType } from 'types/productsTypes';
import CustomPopup from "@components/Popup";
import { CartType } from 'types/cartTypes';

export type ProductProps = {
  addCartItem: (productId: number) => void;
  updateCartItem: (cartItem: CartType) => void;
  deleteCartItem: (cartItem: CartType) => void;
  cartItem: CartType | undefined;
  addLoading: boolean;
  deleteLoading: boolean;
  updateLoading: boolean;
} & ProductType;

const Product = ({
  title,
  price,
  rating,
  description,
  category,
  image,
  id,
  cartItem,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  addLoading,
  updateLoading,
  deleteLoading,
}: ProductProps) => {

  const changeQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
    if (cartItem) {
      updateCartItem({ ...cartItem, quantity: Number(event.target.value) });
    }
  };
  
        
  return (
    <div key={id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-center object-cover bg-[#FCF8EF]"
        />
      </div>
      <div className="mt-4 justify-between">
        <div>
          <h3 className="text-lg mb-10 text-stone-900 h-10 text-center">
            <a href={`/product/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-1 text-lg mb-5 text-stone-900 text-center">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}
          </p>
          <div className="fixed relative m-2 h-50% bg-transparent border-solid border-2 border-zinc-200 left-0 bottom-0 w-full p-3 text-center text-white uppercase text-bold">
              <button className="text-stone-900" > Quick Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
