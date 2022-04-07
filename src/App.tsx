import ContainerLayout from './Layout/ContainerLayout';

import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));
const Cart = lazy(() => import('./Pages/Cart'));
const SingleProduct = lazy(() => import('./Pages/SingleProduct'));


interface Props { }

const App = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<ContainerLayout products={[]} />}>
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <SingleProduct />
            </Suspense>
          }
        />
        {}
      </Route>
      {}
      <Route
        path="/cart"
        element={
          <Suspense fallback={<h1>Login...</h1>}>
            <Cart />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
