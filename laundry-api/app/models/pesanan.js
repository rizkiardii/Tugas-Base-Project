'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pesanan.init({
    id_pesanan: DataTypes.INTEGER,
    id_pelanggan: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    status: DataTypes.ENUM('diterima', 'diproses', 'selesai')
  }, {
    sequelize,
    modelName: 'Pesanan',
  });
  return Pesanan;
};