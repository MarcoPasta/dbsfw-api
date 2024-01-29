import prisma from "./cardModel.js";

async function dropDatabase() {
  await prisma.card.deleteMany();
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
