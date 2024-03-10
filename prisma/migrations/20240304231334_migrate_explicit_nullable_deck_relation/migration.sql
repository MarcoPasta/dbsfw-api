/*
  Warnings:

  - You are about to drop the `_CardToDeck` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_CardToDeck` DROP FOREIGN KEY `_CardToDeck_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CardToDeck` DROP FOREIGN KEY `_CardToDeck_B_fkey`;

-- DropTable
DROP TABLE `_CardToDeck`;

-- CreateTable
CREATE TABLE `DecksOnCards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cardId` INTEGER NOT NULL,
    `deckId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DecksOnCards` ADD CONSTRAINT `DecksOnCards_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DecksOnCards` ADD CONSTRAINT `DecksOnCards_deckId_fkey` FOREIGN KEY (`deckId`) REFERENCES `Deck`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
