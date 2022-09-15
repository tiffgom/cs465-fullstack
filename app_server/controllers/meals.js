const fs = require('fs');
const menu = JSON.parse(fs.readFileSync('data/meals.json', 'utf8'));

/* GET Meals View */
const meals = (req, res) => {
  /*Access package using npm start. Also, packages for description and
    author no longer work for npm version, therefore using package name. */
    pageTitle = process.env.npm_package_name + " | Meals"; 
    res.render("meals", { title: pageTitle, menu });
  };
  
  module.exports = {
    meals,
  };