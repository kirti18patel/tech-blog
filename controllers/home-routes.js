const router = require('express').Router();
const { Post, User, Comment} = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'description', "created_at"],
    include: [
      {
        model: User,
        attributes: ['id','username']
      }
    ],
    order: [['created_at', 'DESC']]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('home', {posts, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/post/:id', (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: ['id', 'title', 'description', "created_at"],
    include: [
      {
        model: Comment,
        include: [User]
          // {attributes: ['id','username']} ],
      }
  ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post= dbPostData.get({ plain: true });
        res.render('comment', {post, comment: "comments list"});
      }
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