import {RouteProps} from "react-router-dom";
import {DriftPage} from "../pages/DriftPage";
import {HomePage} from "../pages/HomePage";
import {TimeAttackPage} from "../pages/TimeAttackPage";
import {ForzaPage} from "../pages/ForzaPage";

export enum AppRoutes {
  HOME = "home",
  DRIFT = "drift",
  TIMEATTACK = "timeattack",
  FORZA = "forza",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.DRIFT]: "/drift",
  [AppRoutes.TIMEATTACK]: "/timeattack",
  [AppRoutes.FORZA]: "/forza",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    element: <HomePage />,
    path: RoutePath.home,
  },
  [AppRoutes.DRIFT]: {
    element: <DriftPage />,
    path: RoutePath.drift,
  },
  [AppRoutes.TIMEATTACK]: {
    element: <TimeAttackPage />,
    path: RoutePath.timeattack,
  },
  [AppRoutes.FORZA]: {
    element: <ForzaPage />,
    path: RoutePath.forza,
  },
};
