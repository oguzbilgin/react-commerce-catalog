import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index:  true,
        path: "/",
        element: <Home />
      },
      {
        index: true,
        path: "/products",
        element: <Products />
      },
      {
        index: true,
        path: "/products/:id",
        element: <ProductDetails />
      }
    ]
  }
])