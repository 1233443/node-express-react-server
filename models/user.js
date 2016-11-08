module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
		name1: DataTypes.STRING,
		name2: DataTypes.STRING,
		name3: DataTypes.STRING,
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	},{
		classMethods: {
			associate: function(models) {
				// example on how to add relations
				//People.hasMany(models.Comments);
			}
		}
	});
	return User;
};