/* GET Travel View */
const travel = (req, res) => {
  pageTitle = process.env.npm_package_name + " - Travel"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
  res.render("travel", { title: pageTitle });
};

module.exports = {
  travel,
};