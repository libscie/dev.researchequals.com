/*
  Warnings:

  - You are about to drop the column `workspaceType` on the `Workspace` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `type` ENUM('REGULAR', 'MODERATOR', 'ADMINISTRATOR') NOT NULL DEFAULT 'REGULAR';

-- AlterTable
ALTER TABLE `Workspace` DROP COLUMN `workspaceType`,
    ADD COLUMN `type` ENUM('INDIVIDUAL', 'GROUP') NOT NULL DEFAULT 'INDIVIDUAL';
