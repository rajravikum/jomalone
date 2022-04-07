import Product from '@components/Product';
import React, { memo, useEffect } from 'react';
import { ProductType } from 'types/productsTypes';
import './Home.css';

type Props = {
  products: ProductType[];
  loadProducts: () => void;
  loadCart: () => void;
  loading: any;
};

const Home = ({ products, loadProducts, loadCart, loading }: Props) => {
  useEffect(() => {
    loadProducts();
    loadCart();
  }, [loadProducts, loadCart]);

  return (
    <div className="bg-transparent">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading['LOAD_PRODUCTS'] && (
            <div className="flex justify-center items-center text-white text-4xl bg-gray-400 absolute z-10 opacity-30">
              Loading...
            </div>
          )}
          {products?.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
