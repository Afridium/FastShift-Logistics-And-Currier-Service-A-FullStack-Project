import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/HomePage/HomePage";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AbouUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: HomePage
        },
        {
          path: 'coverage',
          loader: () => fetch('/warehouses.json').then(res => res.json()),
          Component: Coverage
        },
        {
          path: 'about',
          Component: AboutUs
        }
    ]
  },
]);