import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";
import { PathRouteProps } from "react-router-dom";

enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
}

const routePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routerConfig: Record<AppRoutes, PathRouteProps> = {
  [AppRoutes.HOME]: {
    path: routePath.home,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />,
  },
};
