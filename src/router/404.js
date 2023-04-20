import { ROUTER_PATHS } from './router-paths';

export const route404 = () => {
  const route = ROUTER_PATHS['404'];
  route.template();
  document.title = route.title;
};
