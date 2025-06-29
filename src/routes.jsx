import App from "./App";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/shop",
        element: <ShopPage/>
      }
    ]
  },
];

export default routes;