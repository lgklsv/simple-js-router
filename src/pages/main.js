export const app = function () {
  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';
  
  const header = document.createElement('h1');
  header.innerHTML = 'APP';
  appContainer.append(header);
};
