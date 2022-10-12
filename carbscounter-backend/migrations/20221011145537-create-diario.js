'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Diarios', {
      idusuario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      data: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.DATE
      },
      igmanha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      medicacaomanha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      igantescafe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      igdepoiscafe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      medicacaocafe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      igtarde: {
        allowNull: false,
        type: Sequelize.STRING
      },
      medicacaotarde: {
        allowNull: false,
        type: Sequelize.STRING
      },
      igantesalmoco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      igdepoisalmoco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      medicacaoalmoco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ignoite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      medicacaonoite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      igantesjantar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      igdepoisjantar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      medicacaojantar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      observacoes: {
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
    await queryInterface.dropTable('Diarios');
  }
};