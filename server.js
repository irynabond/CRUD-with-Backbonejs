var mongoose = require('mongoose');
var express = require('express');
var app = express();

var restaurantsRouter = require(__dirname + '/routes/restaurant_routes.js');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/restaurant_stream_dev');

app.use(express.static(__dirname + '/routes/lib'));
app.use(express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/routes'));

console.log(__dirname);
app.use('/api', restaurantsRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server is running');
});
