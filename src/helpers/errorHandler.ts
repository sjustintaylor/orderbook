import createError, { HttpError } from "http-errors";
import express from "express";
import isDevelopmentEnvironment from "./isDevelopmentEnvironment";

export const notFoundHandler = (
  req: express.Request,
  res: express.Response,
  next: (error: HttpError) => any
) => {
  next(createError(404));
};

interface ErrorResponseBody {
  status: number;
  message: string;
  stack?: string;
}
export const errorHandler = (
  error: HttpError,
  req: express.Request,
  res: express.Response,
  next: () => any
) => {
  res.status(error.status || 500);
  const body: ErrorResponseBody = {
    status: error.status,
    message: error.message,
  };
  if (isDevelopmentEnvironment()) {
    body.stack = error.stack;
  }
  res.json(body);
};
