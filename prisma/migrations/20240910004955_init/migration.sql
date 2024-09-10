-- CreateTable
CREATE TABLE `Formulario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pergunta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` ENUM('SIM_NAO', 'MULTIPLA_ESCOLHA', 'DISCURSIVA') NOT NULL,
    `texto` VARCHAR(191) NOT NULL,
    `formularioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Opcao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `texto` VARCHAR(191) NOT NULL,
    `perguntaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resposta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resposta` VARCHAR(191) NOT NULL,
    `dataResposta` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alunoId` INTEGER NOT NULL,
    `perguntaId` INTEGER NOT NULL,
    `formularioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataRespostas` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pergunta` ADD CONSTRAINT `Pergunta_formularioId_fkey` FOREIGN KEY (`formularioId`) REFERENCES `Formulario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Opcao` ADD CONSTRAINT `Opcao_perguntaId_fkey` FOREIGN KEY (`perguntaId`) REFERENCES `Pergunta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_perguntaId_fkey` FOREIGN KEY (`perguntaId`) REFERENCES `Pergunta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_formularioId_fkey` FOREIGN KEY (`formularioId`) REFERENCES `Formulario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
