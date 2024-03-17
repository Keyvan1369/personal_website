const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Category = db.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  }
});

module.exports = Category