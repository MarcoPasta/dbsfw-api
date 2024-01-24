import express from 'express'
import { getAllCards } from '../controllers/cardController.js'

const router = express.Router()

// GET routen
// Alle Karten abrufen
router.get('/cards', getAllCards)


export default router

