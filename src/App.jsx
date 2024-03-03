import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Applayout from "./UI/Applayout";
import Products from "./pages/Products";
import { loader as jordanShoesLoader } from "./pages/Products";
import { loader as jordanShoeLoader } from "./pages/ProductItemDetails";
import ProductItemDetails from "./pages/ProductItemDetails";
import Error from "./UI/Error";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <Error />,
    },
    {
      path: "/aboutUs",
      element: <About />,
    },
    {
      element: <Applayout />,
      errorElement: <Error />,
      children: [
        // { path: "/", element: <Products />, loader: jordanShoesLoader },
        { path: "/products", element: <Products />, loader: jordanShoesLoader },
        {
          path: "products/:productId",
          element: <ProductItemDetails />,
          loader: jordanShoeLoader,
        },
        { path: "/cart", element: <Cart /> },
        { path: "/wishlist", element: <Wishlist /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
