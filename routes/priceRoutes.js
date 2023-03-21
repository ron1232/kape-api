import express from "express";
import { getPriceByBundle } from "../controllers/priceController.js";
const router = express.Router();

router.get("/getPriceByBundle", getPriceByBundle);

export default router;
