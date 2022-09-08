/* GET About View */
const about = (req, res) => {
  /*Access package using npm start. Also, packages for description and
    author no longer work for npm version, therefore using package name. */
    pageTitle = process.env.npm_package_name + " | About"; 
    res.render("about", { title: pageTitle });
  };
  
  module.exports = {
    about,
  };