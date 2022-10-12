'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conteudo extends Model {
    static associate(models) {
    }
  }
  Conteudo.init({
    Data_publicacao: DataTypes.DATE,
    Fonte_autor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Conteudo',
  });
  return Conteudo;
};