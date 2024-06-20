import router, { Route } from "@mongez/react-router";
import BaseLayout from "../design-system/layouts/BaseLayout";
// import AccountLayout from "../design-system/layouts/AccountLayout";

/**
 * Should be used with public routes that allow both visitors and users to see it
 *
 * For Example: Home Page | Contact Us | About Us...
 */
export function publicRoutes(routes: Route[]) {
  return router.partOf(BaseLayout, routes);
}
