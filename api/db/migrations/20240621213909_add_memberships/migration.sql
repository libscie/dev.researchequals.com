/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Workspace` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Workspace` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[workspaceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[handle]` on the table `Workspace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workspaceId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `handle` to the `Workspace` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Workspace_userName_key` ON `Workspace`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `name`,
    ADD COLUMN `workspaceId` INTEGER NOT NULL,
    MODIFY `type` ENUM('REGULAR', 'SUPPORTING', 'MODERATOR', 'ADMINISTRATOR', 'SUPERADMIN') NOT NULL DEFAULT 'REGULAR';

-- AlterTable
ALTER TABLE `Workspace` DROP COLUMN `updatedAt`,
    DROP COLUMN `userName`,
    ADD COLUMN `handle` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Membership` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,
    `role` ENUM('USER', 'ADMIN', 'OWNER') NOT NULL DEFAULT 'USER',
    `type` ENUM('PRIMARY', 'SECONDARY') NOT NULL DEFAULT 'SECONDARY',
    `workspaceId` INTEGER NOT NULL,

    UNIQUE INDEX `Membership_userId_workspaceId_key`(`userId`, `workspaceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_workspaceId_key` ON `User`(`workspaceId`);

-- CreateIndex
CREATE UNIQUE INDEX `Workspace_handle_key` ON `Workspace`(`handle`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_workspaceId_fkey` FOREIGN KEY (`workspaceId`) REFERENCES `Workspace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Membership` ADD CONSTRAINT `Membership_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Membership` ADD CONSTRAINT `Membership_workspaceId_fkey` FOREIGN KEY (`workspaceId`) REFERENCES `Workspace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
