var app = {}; // create namespace for our app

app.Restaurants = Backbone.Model.extend({
	idAttribute: '_id',
  defaults: {
    title: '',
    liked: false,
  },
  toggle: function(){
  	this.save({ liked: !this.get('liked')});
  }
});