/*
  Warnings:

  - You are about to drop the column `workspaceId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_workspaceId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `workspaceId`;

-- AlterTable
ALTER TABLE `Workspace` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Workspace` ADD CONSTRAINT `Workspace_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
