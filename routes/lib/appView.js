// renders the full list of todo items calling RestaurantsView for each one.
app.AppView = Backbone.View.extend({
el: '#restaurantsApp',
initialize: function () {
  this.input = this.$('#new-restaurant');
  app.restaurantsList.on('add', this.addAll, this);
  app.restaurantsList.on('reset', this.addAll, this);
  app.restaurantsList.fetch(); // Loads list from local storage
},
events: {
  'keypress #new-restaurant': 'createRestaurantOnEnter'
},
createRestaurantOnEnter: function(e){
  if ( e.which !== 13 || !this.input.val().trim() ) { 
    return;
  }
  app.restaurantsList.create(this.newAttributes());
  this.input.val(''); // clean input box
},
addOne: function(restaurants){
  var view = new app.RestaurantsView({model: restaurants});
  $('#restaurants-list').append(view.render().el);
},
addAll: function(){
  this.$('#restaurants-list').html(''); // clean the restaurants list
  // filter restaurants item list
  switch(window.filter){
    case 'disliked':
      _.each(app.restaurantsList.remaining(), this.addOne);
      break;
    case 'liked':
      _.each(app.restaurantsList.liked(), this.addOne);
      break;            
    default:
      app.restaurantsList.each(this.addOne, this);
      break;
  }
},
  newAttributes: function(){
    return {
      title: this.input.val().trim(),
      liked: false
    }
  }
});

app.appView = new app.AppView();