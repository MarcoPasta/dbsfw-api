import { expect, test } from "vitest";
import { getAllCards } from "../__mocks__/cardController.js";
import { cardSeed } from "../../data/seeds/cards.js";

// Tests for cards

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

// Tests for creating decks
