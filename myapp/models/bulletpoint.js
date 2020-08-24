'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bulletpoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bulletpoint.belongsTo(models.service,
        {
            as: 'service',
            foreignKey: 'service_id',
        }
    );
    }
  };
  bulletpoint.init({
    service_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bulletpoint',
  });
  return bulletpoint;
};
