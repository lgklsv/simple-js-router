import { PRODUCTS } from './products';

// (to handle data manipulations for demo purposes)
export const findProductById = (id) => {
  const foundProd = PRODUCTS.find((obj) => obj.id === id);
  return foundProd ? foundProd : -1;
};
