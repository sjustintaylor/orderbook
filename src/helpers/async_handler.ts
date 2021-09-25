/**
 * Wraps async express route handlers to make them cleaner to write
 * @copyright Zell Liew, https://zellwk.com/blog/async-await-express/
 * @param callback  The route handler
 * @returns nothing
 */
function asyncHandler(
  callback: (
    req: Express.Request,
    res: Express.Response,
    next: () => any
  ) => any
) {
  return (req: Express.Request, res: Express.Response, next: () => any) => {
    callback(req, res, next).catch(next);
  };
}

export default asyncHandler;
