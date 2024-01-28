import express from "express";
import {
  getAllCards,
  getRedCards,
  getBlueCards,
  getGreenCards,
  getYellowCards,
} from "../controllers/cardController.js";

const router = express.Router();

// GET routes
// Request all cards
router.get("/cards", getAllCards);

// Only request red cards
router.get("/cards/red", getRedCards);

// // Only request blue cards
router.get("/cards/blue", getBlueCards);

// // Only request green cards
router.get("/cards/gree", getGreenCards);

// // Only request yellow cards
router.get("/cards/yellow", getYellowCards);

export default router;
