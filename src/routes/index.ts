import express from "express";
import orders from "./orders";
import orderbooks from "./orderbooks";
import assets from "./assets";

const router = express.Router();

router.use("/assets", assets);
router.use("/orders", orders);
router.use("/orderbooks", orderbooks);

export default router;
