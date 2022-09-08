/* GET Travel View */
const travel = (req, res) => {
  /*Access package using npm start. Also, packages for description and
    author no longer work for npm version, therefore using package name. */
  pageTitle = process.env.npm_package_name + " | Travel"; 
  res.render("travel", { title: pageTitle });
};

module.exports = {
  travel,
};