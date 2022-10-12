'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
    }
  }
  Usuario.init({
    sexo: DataTypes.CHAR,
    peso: DataTypes.FLOAT,
    altura: DataTypes.FLOAT,
    idade: DataTypes.INTEGER,
    nomeusuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    plano: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    tipodediabete: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};