import { pageName } from './project-name';
import { notFound } from '../pages/404';
import { app } from '../pages/main';
import { cart } from '../pages/cart';
import { product } from '../pages/product-page';

/** Router paths aka pages */
export const ROUTER_PATHS = {
  ['404']: {
    template: notFound,
    title: `404 | ${pageName}`,
  },
  ['/']: {
    template: app,
    title: `${pageName}`,
  },
  ['/cart']: {
    template: cart,
    title: `Cart | ${pageName}`,
  },
  ['/product']: {
    template: product,
    title: `Product | ${pageName}`,
  },
};
