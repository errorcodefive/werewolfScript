'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    description: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};