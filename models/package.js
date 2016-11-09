module.exports = function(sequelize, DataTypes) {
	var Package = sequelize.define('package', {
		title: DataTypes.TEXT,
		description:DataTypes.TEXT,
		publisher:DataTypes.INTEGER,
		status:DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				// example on how to add relations
				//People.hasMany(models.Comments);
			}
		}
	});
	return Package;
};