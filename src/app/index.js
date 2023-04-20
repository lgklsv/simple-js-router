import { linkTo } from '../router/linkTo';
import { pathResolver } from '../router/router';

// INIT logic
// Resolves the path on page load
pathResolver(window.location.pathname);

// Handles back and forward browser btns and history stack manipulations
window.addEventListener('popstate', () => {
  pathResolver(window.location.pathname);
});
//

// Btn click handler(demo purposes)
const menu = document.querySelector('.router-test-menu');
menu.addEventListener('click', (e) => {
  e.preventDefault();
  const pathname = e.target.getAttribute('href');
  if (pathname) linkTo(pathname);
});
