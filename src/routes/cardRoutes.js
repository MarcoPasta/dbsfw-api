import express from "express";
import {
  getAllCards,
  getRedCards,
  getBlueCards,
  getGreenCards,
  getYellowCards,
  saveDeckToDB,
  deleteDeckfromDB,
} from "../controllers/cardController.js";

const router = express.Router();

///// GET routes /////
// Request all cards
router.get("/cards", getAllCards);

// Only request red cards
router.get("/cards/red", getRedCards);

// Only request blue cards
router.get("/cards/blue", getBlueCards);

// Only request green cards
router.get("/cards/green", getGreenCards);

// Only request yellow cards
router.get("/cards/yellow", getYellowCards);

///// POST routes /////
// Save a deck to the DB
router.post("/cards/save", saveDeckToDB);

///// DELETE routes /////
router.delete("/decks/:id", deleteDeckfromDB);

export default router;
