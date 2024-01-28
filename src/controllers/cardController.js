import prisma from "../models/cardModel.js";

// Retrieve data from DB using prisma
const getAllCards = async (req, res) => {
  try {
    const cards = await prisma.card.findMany();
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Retrieve all red cards from DB
const getRedCards = async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      where: {
        color: "red",
      },
    });
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Retrieve all blue cards from DB
const getBlueCards = async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      where: {
        color: "blue",
      },
    });
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Retrieve all green cards from DB
const getGreenCards = async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      where: {
        color: "green",
      },
    });
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Retrieve all yellow cards from DB
const getYellowCards = async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      where: {
        color: "yellow",
      },
    });
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export {
  getAllCards,
  getRedCards,
  getBlueCards,
  getGreenCards,
  getYellowCards,
};
