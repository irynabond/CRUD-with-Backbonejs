var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
  title: String,
  liked: {type: Boolean, default: false}
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
