import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Page2 from "./pages/page-2/Page2";
import Page5 from "./pages/page-5/Page5";
import Page4 from "./pages/page-4/Page4";
import Page3 from "./pages/page-3/Page3";
import Page6 from "./pages/page-6/Page6";
import Nathing from "./pages/nathing/Nathing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "page-2",
        element: <Page2 />,
      },
      {
        path: "page-3",
        element: <Page3 />,
      },
      {
        path: "page-4",
        element: <Page4 />,
      },
      {
        path: "page-5",
        element: <Page5 />,
      },
      {
        path: "page-6",
        element: <Page6 />,
      },
      {
        path: "*",
        element: <Nathing />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
