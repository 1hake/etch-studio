import { Category } from "../pages/Category";
import { Home } from "../pages/Home";

interface Route {
  name: string;
  path: string;
  component: JSX.Element;
  isAnonymous?: boolean;
  isProtected?: boolean;
}

export const routesConfig: Route[] = [
  {
    name: "home",
    path: "/",
    component: <Home />,
  },
  {
    name: "categories",
    path: "/categories/:category",
    component: <Category />,
  },
];
