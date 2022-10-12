'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      sexo: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      peso: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      altura: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      idade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nomeusuario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      plano: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cpf: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      tipodediabete: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};