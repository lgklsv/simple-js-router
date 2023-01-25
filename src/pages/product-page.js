export const product = function (product) {
  const appContiner = document.querySelector('#app');
  appContiner.innerHTML = '';

  const header = document.createElement('h1');
  header.innerHTML = `PRODUCT ${product.id}`;
  appContiner.append(header);
};
