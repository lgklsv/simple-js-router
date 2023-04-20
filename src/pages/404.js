export const notFound = function () {
  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';

  const header = document.createElement('h1');
  header.innerHTML = 'PAGE NOT FOUND 404';
  appContainer.append(header);
};
