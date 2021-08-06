// import model and sequelize db connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Post extends Model {}

// define table columns and configuration
Post.init(
  {
    id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
      },
      // define a name column
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // define a title column
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

// export post model
module.exports = Post;