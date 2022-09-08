const index = (req, res) => {
    pageTitle = process.env.npm_package_name; // process.env.npm_package_name can only be accessed if you use 'npm start' *nodemon will not work
    res.render('index', { title: pageTitle });
  };

  module.exports = {
    index,
  };