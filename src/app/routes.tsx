import type { RouteObject } from "react-router";
import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { MobileBankingRedesign } from "./components/projects/MobileBankingRedesign";
import { EcommerceOptimization } from "./components/projects/EcommerceOptimization";
import { NewProject3 } from "./components/projects/NewProject3";
import { BuildingBlocks } from "./components/projects/BuildingBlocks";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    children: [
      { 
        index: true, 
        Component: Home 
      },
      { 
        path: "project/mobile-banking-redesign", 
        Component: MobileBankingRedesign 
      },
      { 
        path: "project/ecommerce-optimization", 
        Component: EcommerceOptimization 
      },
      { 
        path: "project/new-project-3", 
        Component: NewProject3 
      },
      { 
        path: "project/building-blocks", 
        Component: BuildingBlocks 
      },
      {
        path: "*",
        element: <Navigate to="/" replace />
      }
    ],
  },
];

export const router = createBrowserRouter(routes);
