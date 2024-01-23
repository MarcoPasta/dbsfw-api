const express = require('express')
const app = express()
const port = 3000
const { PrismaClient } = require('@prisma/client')

let counter = 0

const path = require('path')
const prisma = new PrismaClient()

async function main() {
    const allCards = await prisma.card.findMany()
    console.log(allCards)

    await prisma.card.create({
        data: {
            name: "Crocodile",
            color: "blue",
            number: "ST02-001",
            type: "Leader",
            image: "/workspaces/dbsfw-api/public/images/blue.png"
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })


// Zugriff auf Karte mit bsp. localhost:3000/static/images/blue.png 
app.use('/static', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.send('Hello World!, Counter : ' + counter)
    counter += 1
})

app.listen(port, () => {
    console.log('Example App listening on port: ' + port)
})
