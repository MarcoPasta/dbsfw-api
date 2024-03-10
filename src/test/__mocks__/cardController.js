import prisma from "../../models/cardModel";

export const getAllCards = async () => {
  return await prisma.card.findMany();
};

export const saveDeckToDB = async (req) => {
  await prisma.deck.create({
    data: {
      name: req.name,
      color: req.deck[0].color,
      leader: req.deck[0].name,
      cards: {
        create: req.deck.map((card) => {
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
};
