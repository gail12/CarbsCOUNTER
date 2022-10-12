'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicos', {
      nomeprofissional: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emailprofissional: {
        allowNull: false,
        type: Sequelize.STRING
      },
      senhaprofissional: {
        allowNull: false,
        type: Sequelize.STRING
      },
      areadeatuacao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      crm: {
        primaryKey: true,
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
    await queryInterface.dropTable('Medicos');
  }
};