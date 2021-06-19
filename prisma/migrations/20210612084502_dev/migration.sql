/*
  Warnings:

  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[title,authorId]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `authorId` on table `Article` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Introduction` DROP FOREIGN KEY `Introduction_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `Tag_ibfk_1`;

-- DropIndex
DROP INDEX `User.userId_unique` ON `User`;

-- DropIndex
DROP INDEX `Article.title_unique` ON `Article`;

-- AlterTable
ALTER TABLE `Article` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `authorId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Introduction` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Tag` MODIFY `articleId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Article.title_authorId_unique` ON `Article`(`title`, `authorId`);

-- CreateIndex
CREATE UNIQUE INDEX `User.userId_id_unique` ON `User`(`userId`, `id`);

-- AddForeignKey
ALTER TABLE `Article` ADD FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Introduction` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tag` ADD FOREIGN KEY (`articleId`) REFERENCES `Article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
