import express from "express";
import {
  getOrders,
  createOrder,
  updateOrderByID,
  deleteOrderByID,
} from "../handlers/orderHandlers";

import asyncHandler from "../helpers/asyncHandler";

const router = express.Router();

// Return all orders in the system according to limit, offset, and asset code query params
router.get("/", asyncHandler(getOrders));

router.post("/", asyncHandler(createOrder));

router.post("/:orderID", asyncHandler(updateOrderByID));

router.delete("/:orderID", asyncHandler(deleteOrderByID));

export default router;
