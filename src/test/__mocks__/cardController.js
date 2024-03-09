import prisma from "../../models/cardModel";

export const getAllCards = async () => {
  return await prisma.card.findMany();
};
