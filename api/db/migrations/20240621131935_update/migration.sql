/*
  Warnings:

  - You are about to drop the column `firstName` on the `Workspace` table. All the data in the column will be lost.
  - You are about to drop the column `handle` on the `Workspace` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `Workspace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userName` to the `Workspace` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Workspace_handle_key` ON `Workspace`;

-- AlterTable
ALTER TABLE `Workspace` DROP COLUMN `firstName`,
    DROP COLUMN `handle`,
    ADD COLUMN `givenName` VARCHAR(191) NULL,
    ADD COLUMN `userName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Workspace_userName_key` ON `Workspace`(`userName`);
