const aboutpageController = (req, res) => {
  res.render('index', {
    title: 'About Keyvan Hojabr',
    message:
      'Amet et laborum excepteur deserunt duis duis dolor quis ad. Dolore quis voluptate consectetur non. Dolor consectetur laborum laborum ad minim enim ea et. Fugiat duis labore elit velit laborum tempor. Aute occaecat laborum sit nulla est nisi. Sint ad quis et aliqua consequat pariatur aliqua nisi excepteur minim.',
    imgsrc: '/assets/img/keyvan img.jpg'
  })
}

module.exports = aboutpageController
