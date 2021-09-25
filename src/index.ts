import dotenv from "dotenv";
import express from "express";
import routes from "./routes";
dotenv.config();

const app = express();

app.use("/", routes);

// start the Express server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started at http://localhost:${process.env.SERVER_PORT}`);
});
