import React, { ChangeEvent, memo, useState } from 'react';
import { ProductType } from 'types/productsTypes';
import { CartType } from 'types/cartTypes';
import { Modal, Button } from "react-bootstrap";

export type ProductProps = {
  addCartItem: (productId: number) => void;
  updateCartItem: (cartItem: CartType) => void;
  deleteCartItem: (cartItem: CartType) => void;
  cartStatus: number;
  cartItem: CartType | undefined;
  addLoading: boolean;
  deleteLoading: boolean;
  updateLoading: boolean;
} & ProductType;

const Product = ({
  title,
  price,
  size,
  unit,
  description,
  image,
  id,
  addCartItem, 
}: ProductProps) => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <p className="mt-1 text-lg mb-5 text-stone-900 text-center">
              {size} <span className='lowercase'>{unit}</span>
          </p>
          <div className="fixed relative m-2 h-50% bg-transparent border-solid border-2 border-zinc-200 left-0 bottom-0 w-full p-3 text-center text-white uppercase text-bold">
              <button className="text-stone-900" onClick={handleShow} value={id}> Quick Shop</button>
          </div>
          <Modal show={showModal} onHide={handleClose}>
        <Button onClick={handleClose} className="float-right text-2xl mr-4"> X </Button>
        <Modal.Body>
        <div className="group relative flex">
      <div className="">
        <img
          src={image}
          alt={title}
          className="sm:w-24 sm:h-64 md:h-96 sm:m-5 md:m-10 object-center object-cover"
        />        
      </div>
      <div className="w-full  mx-5 my-5">
      <h3 className="w-full text-lg  sm:mx-5 sm:my-5 md:mx-10 md:mt-10 md:text-3xl font-bold">
      {title}
      </h3>
      <p className="mt-1 text-lg sm:mx-5 sm:my-5 md:mx-10">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}
            
      </p>
      <p className="mt-1 text-lg mb-5 sm:mx-5 sm:my-5 md:mx-10">{size}<span className='lowercase'>{unit}</span></p>
      <div className="space-y-6">
          <p className="text-base text-gray-900 md:mx-10 sm:hidden">{description}</p>
      </div>
      <div className="left-0 bottom-0 sm:mx-5 md:mx-10 w-full text-center md:w-1/2 md:right-0 md:left-auto md:mt-5 text-white uppercase text-bold">
          <a onClick={() => addCartItem(id)} className="bg-black border-solid block cursor-pointer w-full p-3 text-center text-white uppercase text-bold">
            Add to cart
          </a>
      </div>   
      </div>

    </div>
        </Modal.Body>
      </Modal>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);