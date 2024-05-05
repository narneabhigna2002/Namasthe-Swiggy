import React, { lazy, Suspense, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

// import Grocery from "./components/Grocery";

//Chunking
//Code Splitting
//Dynamic Bundling
//lazy Loading

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState(); 

  //authentication
  useEffect(() => {
    //Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);

  return (
    //wrapped our hole app into our store
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
          <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/Cart",
        element:<Cart/>,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //     path:"/about",
  //     element: <About/>,
  // },
  // {
  //     path:"/contact",
  //     element: <Contact/>,
  // }
]);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter}/>);
export default AppLayout;
