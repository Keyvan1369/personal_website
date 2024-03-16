const Category = require('../models/Caterory')
const Post = require('../models/Post')

const homepageController = async (req, res) => {
  const categories = await Category.findAll()
  const posts = await Post.findAll()
  console.log('categories', categories)
  res.render('index', {
    categories: categories.map((category) => category.name),
    post: posts.map((post) => post.title)
  })
}

module.exports = homepageController
