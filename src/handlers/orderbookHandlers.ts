import express from "express";
import OrderbookModel from "../models/orderbookModel";

export const getOrderbooks = async (
  req: express.Request,
  res: express.Response
) => {
  // id, and asset filter
  const options: any = {};
  if (req?.query?.id) {
    options._id = req.query.id;
  } else if (req?.query?.asset) {
    options.asset = { _id: req?.query?.asset as string };
  }
  const orderbooks = await OrderbookModel.find(options).populate("asset");

  res.status(200).json(orderbooks);
};
