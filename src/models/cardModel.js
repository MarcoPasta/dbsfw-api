import prisma from '../prisma/client.js'

// Importiert den PrismaClient und erstellt ein PrismaModell aus
// dem DB Modell

const Card = prisma.card

export { Card }

