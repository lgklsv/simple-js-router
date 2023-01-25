export const notFound = function () {
  const appContiner = document.querySelector('#app');
  appContiner.innerHTML = '';

  const header = document.createElement('h1');
  header.innerHTML = 'PAGE NOT FOUND 404';
  appContiner.append(header);
};
