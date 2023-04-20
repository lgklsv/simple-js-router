import { fakeApi } from '../shared/api';
import { dynamicRouteHandler } from './dynamic-route-handler';
import { ROUTER_PATHS } from './router-paths';

/** Resolve the location and render a certain page */
export const pathResolver = (pathname) => {
  // Check if pathname exists or render 404
  let route = ROUTER_PATHS[pathname] || ROUTER_PATHS['404'];

  if (pathname.startsWith('/product')) {
    dynamicRouteHandler(pathname, '/product', fakeApi.findProductById);
  } else {
    route.template();
    document.title = route.title;
  }
};
