var express = require('express');
var bodyParser = require('body-parser');
var Restaurant = require(__dirname + '/../models/restaurant.js');
var handleError = require(__dirname + '/../lib/handleServerError.js');
var restaurantsRouter = module.exports = exports = express.Router();

restaurantsRouter.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

restaurantsRouter.get('/restaurants', function(req, res) {
  Restaurant.find({},
  function(err, data) {
    if (err) return handleServerError(err, res);
    res.json(data);
  });
});

restaurantsRouter.post('/restaurants', bodyParser.json(), function(req,res) {
  var newRestaurant = new Restaurant(req.body);
  newRestaurant.save(function(err, data) {
    if (err) return handleServerError(err, res);
    res.json(req.body);
  });
});

restaurantsRouter.put('/restaurants/:id', bodyParser.json(), function(req, res) {
  var restaurantData = req.body;
  delete restaurantData._id;
  Restaurant.update({_id: req.params.id}, restaurantData, function(err) {
    if (err) return handleServerError(err, res);
    res.json({msg: 'success!'});
  });
});

restaurantsRouter.delete('/restaurants/:id', function(req, res) {
  Restaurant.remove({_id: req.params.id}, function(err) {
    if (err) return handleServerError(err, res);
    res.json({msg: 'success!'});
  });
});
