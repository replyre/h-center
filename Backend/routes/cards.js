const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

// Create a new card
router.post("/cards", cardController.createCard);

//Retrieve all cards
router.get("/cards", cardController.getAllCards);

//Retrieve a specific card by title
router.get("/cards/:title", cardController.getCardByTitle);

module.exports = router;
