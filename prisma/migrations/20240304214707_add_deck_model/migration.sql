/*
  Warnings:

  - Made the column `name` on table `Card` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Card` MODIFY `name` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `Deck` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `color` VARCHAR(191) NOT NULL,
    `leader` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `timespamt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
