import { extractPathId } from '../utils/extract-path-id';
import { route404 } from './404';
import { ROUTER_PATHS } from './router-paths';

export const dynamicRouteHandler = async (pathname, commonPath, fetchData) => {
  if (pathname.startsWith(commonPath) && fetchData !== -1) {
    try {
      const id = extractPathId(pathname);
      const item = await fetchData(id);
      // In this if statement you can run any validation for error from API request
      if (item !== -1) {
        const route = ROUTER_PATHS[commonPath];
        document.title = route.title;
        route.template(item);
      } else {
        route404();
      }
    } catch (e) {
      console.log(e);
      route404();
    }
  } else {
    route404();
  }
};
