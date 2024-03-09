import { expect, test } from "vitest";
import { getAllCards, saveDeckToDB } from "../__mocks__/cardController.js";
import { cardSeed } from "../../data/seeds/cards.js";
import { deckSeed } from "../../data/seeds/decks.js";
import { app } from "../../app.js";
import { mock } from "vitest-mock-extended";

// Setup
const request = require("supertest");
let mockCards = cardSeed;
// map id's to mockCards so it can be compared
for (let i = 0; i < mockCards.length; i++) {
  const obj = mockCards[i];
  mockCards[i] = { id: i + 1, ...obj };
}

// Tests cardSeed
test("Test if same amount of cards are in DB", async () => {
  const result = await getAllCards();
  expect(result.length).toEqual(cardSeed.length);
});

test("Test if the items in the DB are the same as in the seed", async () => {
  const result = await getAllCards();
  for (let i = 0; i < result.length; i++) {
    expect(result[i].name).toEqual(cardSeed[i].name);
    expect(result[i].number).toEqual(cardSeed[i].number);
    expect(result[i].color).toEqual(cardSeed[i].color);
  }
});

// Test GET routes
test("GET /api/cards", async () => {
  const res = await request(app).get("/api/cards");

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(mockCards);
});

// Test POST routes
test("POST /api/cards/save", async (req, res) => {
  const testReq = {
    name: "Integration Test",
    deck: deckSeed,
  };

  const testRes = await request(app).post("/api/cards/save").send(testReq);

  console.debug(testRes.text);
});
