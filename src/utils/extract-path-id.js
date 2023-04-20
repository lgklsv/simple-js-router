// (to handle data manipulations for demo purposes)
export const extractPathId = function (path) {
  const splittedPath = path.split('/');
  if (splittedPath.length > 0) {
    let id = splittedPath[splittedPath.length - 1];
    return id && !Number.isNaN(+id) && splittedPath.length === 3 ? +id : -1;
  }
  return -1;
};
