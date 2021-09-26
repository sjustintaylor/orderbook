import express from "express";

export const getOrders = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200).send("Hello world");
};

export const createOrder = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200).send("Hello world");
};

export const updateOrderByID = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200).send("Hello world");
};

export const deleteOrderByID = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200).send("Hello world");
};
