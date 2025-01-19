-- AlterTable
ALTER TABLE `Token` MODIFY `type` ENUM('OTP', 'SESSION') NOT NULL;
