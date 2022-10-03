import * as React from "react";

import CardGroup from "./subcomponents/cards/CardGroup";
import Home from "./pages/Home";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import Tabs from "./subcomponents/tabs/Tabs";

import DetailedPage from "./pages/DetailedPage";

import { TabItemsNames } from "../resources/strings";
import {Dishes} from "../resources/strings"


function App() {
  const tabsBrowse: string[] = [];
  tabsBrowse.push(TabItemsNames.APPETIZERS);
  tabsBrowse.push(TabItemsNames.DESSERTS);
  tabsBrowse.push(TabItemsNames.KIDFRIENDLY);
  tabsBrowse.push(TabItemsNames.MAINDISH);
  tabsBrowse.push(TabItemsNames.QUICKANDEASY);
  tabsBrowse.push(TabItemsNames.SALADS);
  tabsBrowse.push(TabItemsNames.SIDEDISH);
  tabsBrowse.push(TabItemsNames.VEGETARIAN);

  const tabsDishes: string[] = []
  tabsDishes.push(Dishes.brownie.name)
  tabsDishes.push(Dishes.burger.name)
  tabsDishes.push(Dishes.cake.name)
  tabsDishes.push(Dishes.cookie.name)
  tabsDishes.push(Dishes.lasagna.name)
  tabsDishes.push(Dishes.pancake.name)
  tabsDishes.push(Dishes.pie.name)
  tabsDishes.push(Dishes.pizza.name)
  tabsDishes.push(Dishes.sandwich.name)


  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/browse/:browseItem",
          element: <div> <Tabs tabs={tabsBrowse} path={"/browse/"}/> <CardGroup/> </div>
        },

        {
          path: "/recipe/:id",
          element: <DetailedPage />,
        },
        {
          path: "/feed/:type",
          element: <CardGroup />,
        },
        {
          path: "/dishes/:dish",
          element: <div> <Tabs tabs={tabsDishes} path={"/dishes/"}/>  <CardGroup /> </div>
        },
        {
          path: "/search/:query",
          element: <CardGroup />
        }

      ],
    },
  ]);

  return <RouterProvider router={router} />;

}

export default App;
