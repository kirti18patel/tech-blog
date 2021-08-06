const router = require('express').Router();
const { Post, User} = require('../models');

router.get('/', (req, res) => {
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
      console.log(posts);
      res.render('home', {posts});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;