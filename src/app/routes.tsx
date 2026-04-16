import type { RouteObject } from "react-router";
import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { MobileBankingRedesign } from "./components/projects/MobileBankingRedesign";
import { EcommerceOptimization } from "./components/projects/EcommerceOptimization";
import { KlilConfigurator } from "./components/projects/KlilConfigurator";
import { ContextPerformanceCost } from "./components/projects/ContextPerformanceCost";
import { BuildingBlocks } from "./components/projects/BuildingBlocks";
import { VodafoneRomania } from "./components/projects/VodafoneRomania";

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
        path: "project/connecting-visual-text-data",
        Component: MobileBankingRedesign
      },
      {
        path: "project/im-free-again",
        Component: EcommerceOptimization
      },
      {
        path: "project/klil-configurator",
        Component: KlilConfigurator
      },
      {
        path: "project/context-performance-cost",
        Component: ContextPerformanceCost
      },
      {
        path: "project/building-blocks",
        Component: BuildingBlocks
      },
      {
        path: "project/vodafone-romania",
        Component: VodafoneRomania
      },
      {
        path: "*",
        element: <Navigate to="/" replace />
      }
    ],
  },
];

export const router = createBrowserRouter(routes);
