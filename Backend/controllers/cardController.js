const Card = require("../models/Card");

exports.createCard = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCardByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
