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

// save a deck to the DB
const saveDeckToDB = async (req, res) => {
  try {
    await prisma.deck.create({
      data: {
        name: req.body.name,
        color: req.body.deck[0].color,
        leader: req.body.deck[0].name,
        cards: {
          create: req.body.deck.map((card) => {
            return {
              card: {
                connect: { id: card.id },
              },
            };
          }),
        },
      },
      include: {
        cards: true,
      },
    });
    res.status(201).send("Created: Deck was stored successfully");
  } catch (error) {
    console.error(error);
    res
      .status(422)
      .send("Unprocessable Content: Kp was ich hier noch rienpacken kann");
  }
};

const deleteDeckfromDB = async (req, res) => {
  console.log(Number(req.params.id));
  // req braucht hier eigentlich nur die ID von dem Deck was gelöscht werden soll
  try {
    await prisma.deck.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).send("OK: Deck deleted successfully");
  } catch (error) {
    console.error(error);
    res.send("Could not be deleted");
  }
};

export {
  getAllCards,
  getRedCards,
  getBlueCards,
  getGreenCards,
  getYellowCards,
  saveDeckToDB,
  deleteDeckfromDB,
};
