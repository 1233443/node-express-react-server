module.exports = function(sequelize, DataTypes) {
	var Topic = sequelize.define('topic', {
		topicName: DataTypes.STRING,
		pinyin: DataTypes.STRING,
	}, {
		classMethods: {
			associate: function(models) {
				// example on how to add relations
				//People.hasMany(models.Comments);
			}
		}
	});
	return Topic;
};