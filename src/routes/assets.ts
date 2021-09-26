import express from "express";
import asyncHandler from "../helpers/asyncHandler";
import {
  getAssets,
  createAsset,
  updateAssetByID,
  deleteAssetByID,
} from "../handlers/assetHandlers";

const router = express.Router();

// Return all assets in the system
router.get("/", asyncHandler(getAssets));

// Take the new asset's name. Creates an asset record, and an orderbook for the asset.
router.post("/", asyncHandler(createAsset));

// Can only update an asset's name
router.patch("/:orderID", asyncHandler(updateAssetByID));

// This will delete an asset, the asset's orderbook, and any orders for the asset
router.delete("/:orderID", asyncHandler(deleteAssetByID));

export default router;
