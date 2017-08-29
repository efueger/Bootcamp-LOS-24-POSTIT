export default (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    groupname: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false  //  dont write to db if data is not supplied
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, //  dont write to db if data is not supplied
    }
  });
  Group.associate = (models) => {
    Group.belongsToMany(models.User, {
      through: 'UserGroup',
      as: 'user',
      foreignKey: 'groupname'
    });
  };
  return Group;
};
