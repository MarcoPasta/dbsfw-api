import prisma from '../models/cardModel.js'

// Hier werden wohl die DB Zugriffe gemacht
const getAllCards = async (req, res) => {
    try {
        const cards = await prisma.card.findMany()
        res.json(cards)
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
}

export { getAllCards }