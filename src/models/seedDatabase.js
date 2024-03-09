import prisma from "./cardModel.js";
import cards from "../data/seeds/cards.js";
import decks from "../data/seeds/decks.js";

async function seedDatabase() {
  await prisma.card.createMany({
    data: cards,
  });
}

async function seedDeck() {
  await prisma.deck.create({
    data: {
      name: "Testdeck",
      color: decks[0].color,
      leader: decks[0].name,
      cards: {
        create: decks.map((card) => {
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
}

async function main() {
  try {
    console.log("seeding Database...");
    console.log("seeding cards...");
    await seedDatabase();
    // console.log("seeding decks...");
    // await seedDeck();
    console.log("seeding completed successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
