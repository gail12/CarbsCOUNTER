'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diario extends Model {
    static associate(models) {
    }
  }
  Diario.init({
    idusuario: DataTypes.STRING,
    data: DataTypes.DATE,
    igmanha: DataTypes.STRING,
    medicacaomanha: DataTypes.STRING,
    igantescafe: DataTypes.STRING,
    igdepoiscafe: DataTypes.STRING,
    medicacaocafe: DataTypes.STRING,
    igtarde: DataTypes.STRING,
    medicacaotarde: DataTypes.STRING,
    igantesalmoco: DataTypes.STRING,
    igdepoisalmoco: DataTypes.STRING,
    medicacaoalmoco: DataTypes.STRING,
    ignoite: DataTypes.STRING,
    medicacaonoite: DataTypes.STRING,
    igantesjantar: DataTypes.STRING,
    igdepoisjantar: DataTypes.STRING,
    medicacaojantar: DataTypes.STRING,
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diario',
  });
  return Diario;
};