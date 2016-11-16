module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
		username: DataTypes.TEXT,
		password:DataTypes.TEXT,
		roleId:DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				// example on how to add relations
				//People.hasMany(models.Comments);
			}
		}
	});
	return User;
};