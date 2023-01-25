export const app = function () {
  const appContiner = document.querySelector('#app');
  appContiner.innerHTML = '';
  
  const header = document.createElement('h1');
  header.innerHTML = 'APP';
  appContiner.append(header);
};
