const User = require('./User');
const Post = require('./Post');

// // create associations
// User.hasMany(Product, {
//     foreignKey: 'user_id'
//   });
  
// Product.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// export model
module.exports = { User, Post };