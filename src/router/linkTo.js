import { pathResolver } from './router';

// Function to use on links and btns to change route
export const linkTo = (pathname) => {
  window.history.pushState({}, '', window.location.origin + pathname);
  pathResolver(pathname);
};
