import prisma from "./cardModel.js";

const mockCards = [
  {
    id: 1,
    name: "Monkey D. Luffy",
    color: "red",
    number: "ST01-001",
    type: "Leader",
    image: "http://localhost:3000/images/red.png",
  },
  {
    id: 2,
    name: "Eustass Kid",
    color: "green",
    number: "ST02-001",
    type: "Leader",
    image: "http://localhost:3000/images/green.png",
  },
  {
    id: 3,
    name: "Crocodile",
    color: "blue",
    number: "ST03-001",
    type: "Leader",
    image: "http://localhost:3000/images/blue.png",
  },
  {
    id: 4,
    name: "Big Mom",
    color: "yellow",
    number: "ST07-001",
    type: "Leader",
    image: "http://localhost:3000/images/yellow.png",
  },
];

async function seedDatabase() {
  await prisma.card.createMany({
    data: mockCards,
  });
}

async function main() {
  try {
    console.log("seeding Database...");
    await seedDatabase();
    console.log("seeding completed successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
