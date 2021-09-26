import express from "express";
export const getOrderbooks = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200).send("Hello world");
};

export const getOrderbookByID = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200).send("Hello world");
};
