import express from "express";

/**
 * Wraps async express route handlers to make them cleaner to write
 * @copyright Zell Liew, https://zellwk.com/blog/async-await-express/
 * @param callback  The route handler
 * @returns nothing
 */
function asyncHandler(
  callback: (
    req: express.Request,
    res: express.Response,
    next: () => any
  ) => any
) {
  return (req: express.Request, res: express.Response, next: () => any) => {
    callback(req, res, next).catch(next);
  };
}

export default asyncHandler;
