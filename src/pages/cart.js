export const cart = function () {
  const appContiner = document.querySelector('#app');
  appContiner.innerHTML = '';
  
  const header = document.createElement('h1');
  header.innerHTML = 'CART';
  appContiner.append(header);
};
