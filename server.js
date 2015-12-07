var mongoose = require('mongoose');
var express = require('express');
var app = express();

var restaurantsRouter = require(__dirname + '/app/restaurant_routes.js');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/restaurant');

app.use(express.static(__dirname + '/app'));
app.use("/api", restaurantsRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server is running');
});
