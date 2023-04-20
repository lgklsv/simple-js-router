export const product = function (product) {
  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';

  const header = document.createElement('h1');
  header.innerHTML = `PRODUCT ${product.id}`;
  appContainer.append(header);
};
