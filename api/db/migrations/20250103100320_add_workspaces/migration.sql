-- AlterTable
ALTER TABLE `User` ADD COLUMN `type` ENUM('REGULAR', 'SUPPORTING', 'MODERATOR', 'ADMINISTRATOR', 'SUPERADMIN') NOT NULL DEFAULT 'REGULAR';

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

-- CreateTable
CREATE TABLE `Workspace` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('INDIVIDUAL', 'GROUP') NOT NULL DEFAULT 'INDIVIDUAL',
    `handle` VARCHAR(191) NOT NULL,
    `givenName` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg',

    UNIQUE INDEX `Workspace_handle_key`(`handle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Membership` ADD CONSTRAINT `Membership_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Membership` ADD CONSTRAINT `Membership_workspaceId_fkey` FOREIGN KEY (`workspaceId`) REFERENCES `Workspace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
