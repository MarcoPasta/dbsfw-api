/*
  Warnings:

  - You are about to drop the `DecksOnCards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `DecksOnCards` DROP FOREIGN KEY `DecksOnCards_cardId_fkey`;

-- DropForeignKey
ALTER TABLE `DecksOnCards` DROP FOREIGN KEY `DecksOnCards_deckId_fkey`;

-- DropTable
DROP TABLE `DecksOnCards`;

-- CreateTable
CREATE TABLE `_CardToDeck` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CardToDeck_AB_unique`(`A`, `B`),
    INDEX `_CardToDeck_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CardToDeck` ADD CONSTRAINT `_CardToDeck_A_fkey` FOREIGN KEY (`A`) REFERENCES `Card`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CardToDeck` ADD CONSTRAINT `_CardToDeck_B_fkey` FOREIGN KEY (`B`) REFERENCES `Deck`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
