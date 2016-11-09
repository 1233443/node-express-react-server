module.exports = function(sequelize, DataTypes) {
	var Score = sequelize.define('score', {
		package_id: DataTypes.INTEGER,
		sender:DataTypes.INTEGER,
		score:DataTypes.INTEGER,
	}, {
		classMethods: {
			associate: function(models) {
				// example on how to add relations
				//People.hasMany(models.Comments);
			}
		}
	});
	return Score;
};