import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './pages/shop/Shop.jsx';
import Men from './pages/men/Men.jsx';
import Women from './pages/women/Women.jsx';
import Kids from './pages/kids/Kids.jsx';
import Cart from './pages/cart/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "men",
        element: <Men />
      },
      {
        path: "women",
        element: <Women />
      },
      {
        path: "kids",
        element: <Kids />
      },
      {
        path: "cart",
        element: <Cart />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
