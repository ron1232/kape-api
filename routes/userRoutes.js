import express from "express";
import {
  userLandedInPage,
  userPressedBuyButton,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/user-landed-in-page", userLandedInPage);
router.get("/user-pressed-buy-now", userPressedBuyButton);

export default router;
