var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const client = req.app.locals.database;
    const blog = client.db('blog');
    const posts = blog.collection('posts');
    const allPosts = await posts.find({}).toArray();
    res.render('index', {
      title: 'Blog',
      posts: allPosts,
    });
  } catch (e) {
    console.log('An error occurred', e);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
