/* GET News View */
const news = (req, res) => {
  /*Access package using npm start. Also, packages for description and
    author no longer work for npm version, therefore using package name. */
    pageTitle = process.env.npm_package_name + " | News"; 
    res.render("news", { title: pageTitle });
  };
  
  module.exports = {
    news,
  };