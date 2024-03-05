/*
  Warnings:

  - You are about to drop the column `timespamt` on the `Deck` table. All the data in the column will be lost.
  - Added the required column `timespan` to the `Deck` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Deck` DROP COLUMN `timespamt`,
    ADD COLUMN `timespan` DATETIME(3) NOT NULL;
