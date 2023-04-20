import { appTitle } from '../app/config';
import { notFound } from '../pages/404';
import { app } from '../pages/main';
import { cart } from '../pages/cart';
import { product } from '../pages/product-page';

/** Router paths aka pages */
export const ROUTER_PATHS = {
  ['404']: {
    template: notFound,
    title: `404 | ${appTitle}`,
  },
  ['/']: {
    template: app,
    title: `${appTitle}`,
  },
  ['/cart']: {
    template: cart,
    title: `Cart | ${appTitle}`,
  },
  ['/product']: {
    template: product,
    title: `Product | ${appTitle}`,
  },
};
