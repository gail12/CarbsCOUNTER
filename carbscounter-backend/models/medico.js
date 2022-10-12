'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medico extends Model {
    static associate(models) {
    }
  }
  Medico.init({
    nomeprofissional: DataTypes.STRING,
    emailprofissional: DataTypes.STRING,
    senhaprofissional: DataTypes.STRING,
    areadeatuacao: DataTypes.STRING,
    crm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medico',
  });
  return Medico;
};