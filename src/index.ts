import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { errorHandler, notFoundHandler } from "./helpers/errorHandler";
import routes from "./routes";
import morgan from "morgan";
import connectDatabase from "./database";
import isDevelopmentEnvironment from "./helpers/isDevelopmentEnvironment";
// tslint:disable-next-line: no-var-requires
const debug: (error: any) => void = require("debug")("SERVER");

connectDatabase();

const app = express();

// Middleware
app.use(morgan("combined"));
app.use(express.json());

// Routes
app.use("/", routes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// start the Express server
app.listen(process.env.SERVER_PORT, () => {
  if (isDevelopmentEnvironment()) {
    debug(`Server started at http://localhost:${process.env.SERVER_PORT}`);
  }
});
