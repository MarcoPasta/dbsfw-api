import prisma from '../../src/models/cardModel.js'

describe("Prisma ORM DB Tests", () => {

    let cardMock = [
        {
            "id": 1,
            "name": "Kid",
            "color": "green",
            "number": "ST03-001",
            "type": "Leader",
            "image": "/workspaces/dbsfw-api/public/images/green.png"
        },
        {
            "id": 2,
            "name": "Crocodile",
            "color": "blue",
            "number": "ST02-001",
            "type": "Leader",
            "image": "/workspaces/dbsfw-api/public/images/blue.png"
        }
    ]

    it("data retrieved correctly", async function () {
        const rtvCards = await prisma.card.findMany()
        expect(rtvCards).toEqual(cardMock)
    })
})


describe("Prisma ORM Call Tests", () => {

    let cardMock = {
        "id": 1,
        "name": "Kid",
        "color": "green",
        "number": "ST03-001",
        "type": "Leader",
        "image": "/workspaces/dbsfw-api/public/images/green.png"
    }

    beforeEach(async function () {
        spyOn(prisma.card, 'findMany').and.returnValue(Promise.resolve(cardMock))
    })

    it("findMany() was called", async () => {
        await prisma.card.findMany()
        expect(prisma.card.findMany).toHaveBeenCalled()
    })
})
