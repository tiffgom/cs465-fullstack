const fs = require('fs');
const roomsList = JSON.parse(fs.readFileSync('./data/roomsList.json', 'utf8'));

/* GET Rooms View */
const rooms = (req, res) => {
  /*Access package using npm start. Also, packages for description and
    author no longer work for npm version, therefore using package name. */
  pageTitle = process.env.npm_package_name + " | Rooms"; 
  res.render("rooms", { title: pageTitle, roomsList });
};

module.exports = {
  rooms,
};