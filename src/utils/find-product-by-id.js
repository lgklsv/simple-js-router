import { PRODUCTS } from '../const/products';

// (to handle data manipulations for demo purposes)
export const findProductById = function (id) {
  const foundProd = PRODUCTS.find((obj) => obj.id === id);
  return foundProd ? foundProd : -1;
};
