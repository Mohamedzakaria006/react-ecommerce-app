import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLatout/AppLayout.jsx";
import Products from "./pages/Products/Products.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Cart from "./components/Cart/Cart.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: "category/:category",
            element: <Products />,
          },
        ],
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={routes}></RouterProvider>;
    </QueryClientProvider>
  );
}

export default App;
