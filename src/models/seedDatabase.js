import prisma from "./cardModel.js";

const mockCards = [
  {
    name: "Son Goku",
    color: "red",
    number: "FS01-01",
    type: "Leader",
    image: "http://localhost:3000/images/FS01/FW_FS01-01.png",
  },
  {
    name: "Android 17",
    color: "red",
    number: "FS01-06",
    type: "Battle",
    image: "http://localhost:3000/images/FS01/FW_FS01-06.png",
  },
  {
    name: "Son Gohan: Adolescence",
    color: "red",
    number: "FS01-09",
    type: "Battle",
    image: "http://localhost:3000/images/FS01/FW_FS01-09.png",
  },
  {
    name: "Vegeta",
    color: "blue",
    number: "FS02-01",
    type: "Leader",
    image: "http://localhost:3000/images/FS02/FW_FS02-01.png",
  },
  {
    name: "Gotenks",
    color: "blue",
    number: "FS02-03",
    type: "Battle",
    image: "http://localhost:3000/images/FS02/FW_FS02-03.png",
  },
  {
    name: "Trunks: Youth",
    color: "blue",
    number: "FS02-09",
    type: "Battle",
    image: "http://localhost:3000/images/FS02/FW_FS02-09.png",
  },
  {
    name: "Broly",
    color: "green",
    number: "FS03-01",
    type: "Leader",
    image: "http://localhost:3000/images/FS03/FW_FS03-01.png",
  },
  {
    name: "Broly: BR",
    color: "green",
    number: "FS03-10",
    type: "Battle",
    image: "http://localhost:3000/images/FS03/FW_FS03-10.png",
  },
  {
    name: "King Vegeta",
    color: "green",
    number: "FS03-12",
    type: "Battle",
    image: "http://localhost:3000/images/FS03/FW_FS03-12.png",
  },
  {
    name: "Frieza",
    color: "yellow",
    number: "FS04-01",
    type: "Leader",
    image: "http://localhost:3000/images/FS04/FW_FS04-01.png",
  },
  {
    name: "Golden Frieza",
    color: "yellow",
    number: "FS04-03",
    type: "Battle",
    image: "http://localhost:3000/images/FS04/FW_FS04-03.png",
  },
  {
    name: "Zarbon",
    color: "yellow",
    number: "FS04-05",
    type: "Battle",
    image: "http://localhost:3000/images/FS04/FW_FS04-05.png",
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
