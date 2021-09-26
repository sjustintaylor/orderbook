import express from "express";
import { getOrderbooks } from "../handlers/orderbookHandlers";
import asyncHandler from "../helpers/asyncHandler";

const router = express.Router();

// Return all orderbooks in the system
// Has optional id and asset filter
router.get("/", asyncHandler(getOrderbooks));

export default router;
