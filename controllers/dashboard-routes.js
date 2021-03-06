const router = require('express').Router();
const { Post, User} = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
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
      res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
  Post.findByPk(req.params.id, {
    include: [ User ]
  })
    .then(dbPostData => {
      
      if (dbPostData) {
        const post= dbPostData.get({ plain: true });
      res.render('editPost', {post});}
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;