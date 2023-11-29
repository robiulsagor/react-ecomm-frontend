import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './pages/shop/Shop.jsx';
import Product from './pages/product/Product.jsx';
import ShopCategory from './pages/shop/Shop.jsx';
import Cart from "./pages/cart/Cart.jsx"
import LoginRegister from './pages/loginRegister/LoginRegister.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />
      },
      {
        path: "product/:productId",
        element: <Product />
      },
      {
        path: "men",
        element: <ShopCategory category="men" />
      },
      {
        path: "women",
        element: <ShopCategory category="women" />
      },
      {
        path: "kids",
        element: <ShopCategory category="kids" />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "login",
        element: <LoginRegister />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
