/* GET News View */
const news = (req, res) => {
    pageTitle = process.env.npm_package_name + " - News"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
    res.render("news", { title: pageTitle });
  };
  
  module.exports = {
    news,
  };