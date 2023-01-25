import { ROUTER_PATHS } from '../const/router-paths';
import { extractPathId } from '../utils/extract-path-id';
import { findProductById } from '../utils/find-product-by-id';

/** Resolve the location and render a certain page */
const pathResolver = (pathname) => {
  // Check if pathname exists or render 404
  let route = ROUTER_PATHS[pathname] || ROUTER_PATHS['404'];

  // Dynamic route handling
  if (pathname.startsWith('/product')) {
    const product = findProductById(extractPathId(pathname));

    if (product !== -1) {
      route = ROUTER_PATHS['/product'];
      route.template(product);
      document.title = route.title;
    } // if id is invalid render 404
    else {
      route.template();
      document.title = route.title;
    }
  } // Static route handling
  else {
    route.template();
    document.title = route.title;
  }
};

// Resolves the path on page load
pathResolver(window.location.pathname);

// Function to use on likns and btns to change route
const route = (pathname) => {
  window.history.pushState({}, '', window.location.origin + pathname);
  pathResolver(pathname);
};

// Handles back and forward browser btns and history stack manipulations
window.addEventListener('popstate', () => {
  pathResolver(window.location.pathname);
});

// Btn click handler(demo purposes)
const menu = document.querySelector('.router-test-menu');
menu.addEventListener('click', (e) => {
  e.preventDefault();
  const pathname = e.target.getAttribute('href');
  if (pathname) route(pathname);
});
