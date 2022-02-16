import React, { ChangeEvent, memo } from 'react';
import { ProductType } from 'types/productsTypes';
import cn from 'classnames';
import Rating from '@components/Rating';
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
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/product/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}
          </p>
          <div className="mt-6">
            <Rating {...rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
