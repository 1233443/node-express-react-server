module.exports = function(sequelize, DataTypes) {
	var Comment = sequelize.define('comment', {
		publisher: DataTypes.INTEGER,
		package_id:DataTypes.INTEGER,
		content:DataTypes.TEXT,
	}, {
		classMethods: {
			associate: function(models) {
				// example on how to add relations
				//People.hasMany(models.Comments);
			}
		}
	});
	return Comment;
};