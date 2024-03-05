import prisma from "./cardModel.js";

async function dropDatabase() {
  await prisma.decksOnCards.deleteMany();
  await prisma.card.deleteMany();
  await prisma.deck.deleteMany();
  await prisma.$queryRaw`ALTER TABLE Card AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE Deck AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE DecksOnCards AUTO_INCREMENT = 1`;
}

async function main() {
  try {
    console.log("deleting Database...");
    await dropDatabase();
    console.log("deleting completed successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
