const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User} = require('../models');

// get all posts for dashboard
router.get('/', (req,  res) => {
  Post.findAll({
    attributes: ['id', 'title', 'description'],
    include: [
      {
        model: User,
        attributes: ['id','name', 'email']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;