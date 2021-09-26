import mongoose from "mongoose";
// tslint:disable-next-line: no-var-requires
const debug: (error: any) => void = require("debug")("MONGODB");

export default async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    debug("Database connected");
  } catch (error) {
    debug(error);
  }
};
