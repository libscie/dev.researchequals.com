/*
  Warnings:

  - You are about to drop the column `userId` on the `Workspace` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Workspace` DROP FOREIGN KEY `Workspace_userId_fkey`;

-- AlterTable
ALTER TABLE `Workspace` DROP COLUMN `userId`;
