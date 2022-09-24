const mongoose = require("mongoose");
const Model = mongoose.model("trips");

// GET: /trips - lists all of the trips
const tripsList = async (req, res) => {
  Model.find({}).exec((err, trips) => {
    if (!trips) {   // If no trips
      return res.status(404).json({ message: "trips not found" });
    } 
    else if (err) { // If error from Mongoose
      return res.status(404).json(err);
    } 
    else {
      return res.status(200).json(trips);
    }
  });
};

// GET: trips/:tripFindCode - returns a single trip
const tripsFindCode = async (req, res) => {
    Model.find({ code: req.params.tripCode }).exec((err, trip) => {
      if (!trip) {
        return res.status(404).json({ message: "trip not found" });
      } 
      else if (err) {
        return res.status(404).json(err);
      } 
      else {
        return res.status(200).json(trip);
      }
    });
  };
  
  module.exports = {
    tripsList,
    tripsFindCode,
  };