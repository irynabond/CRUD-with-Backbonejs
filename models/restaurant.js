var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
  name: String,
  feedback: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
