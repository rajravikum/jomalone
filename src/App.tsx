import { AuthContext } from 'context/authContext';
import ContainerLayout from './Layout/ContainerLayout';

import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthLayout from './Layout/AuthLayout';
import MainLayout from './Layout/MainLayout';


const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./Pages/Login'));
const Register = lazy(() => import('./Pages/Register'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const Cart = lazy(() => import('./Pages/Cart'));
const Order = lazy(() => import('./Pages/Order'));
const SingleProduct = lazy(() => import('./Pages/SingleProduct'));


interface Props { }

const App = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<ContainerLayout />}>
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
        {/* <Route
          path="/login"
          element={
            <Suspense fallback={<h1>Login...</h1>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<h1>Login...</h1>}>
              <Register />
            </Suspense>
          }
        /> */}
      </Route>
      {/* <Route path="/home" element={<MainLayout />}>
        <Route
          path="/home"
          element={
            <Suspense fallback={<h1>Login...</h1>}>
              <Home />
            </Suspense>
          }
        />
      </Route> */}
      <Route
        path="*"
        element={
          <Suspense fallback={<h1>Login...</h1>}>
            <NotFound />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<h1>Login...</h1>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="/order"
        element={
          <Suspense fallback={<h1>Login...</h1>}>
            <Order />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
