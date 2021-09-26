import express from "express";
import AssetModel from "../models/assetModel";
import assetSchema from "../schemas/assetSchema";
import createError from "http-errors";
import OrderbookModel from "../models/orderbookModel";

export const getAssets = async (
  req: express.Request,
  res: express.Response
) => {
  const assets = await AssetModel.find();
  res.status(200).json(assets);
};

export const createAsset = async (
  req: express.Request,
  res: express.Response
) => {
  const { name } = await assetSchema(req.body);
  const asset = await AssetModel.create({ name });
  await OrderbookModel.create({ asset, bid: 0, ask: 0 });
  res.status(200).json(asset);
};

export const updateAssetByID = async (
  req: express.Request,
  res: express.Response
) => {
  if (!req.params.orderID) {
    throw createError(400, "orderID is required");
  }

  const { name } = await assetSchema(req.body);
  const asset = await AssetModel.updateOne(
    { _id: req.params.orderID },
    { name }
  );
  res.status(200).json({ _id: req.params.orderID, name });
};

export const deleteAssetByID = async (
  req: express.Request,
  res: express.Response
) => {
  if (!req.params.orderID) {
    throw createError(400, "orderID is required");
  }
  await AssetModel.deleteOne({ _id: req.params.orderID });
  res.status(204).send("");
};
