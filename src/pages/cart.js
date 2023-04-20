export const cart = function () {
  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';
  
  const header = document.createElement('h1');
  header.innerHTML = 'CART';
  appContainer.append(header);
};
