app.RestaurantsList = Backbone.Collection.extend({
  model: app.Restaurants,
  //localStorage: new Store("backbone-restaurants"),
  url: '/restaurants',
  liked: function() {
    return this.filter(function( restaurants ) {
      return restaurants.get('liked');
    });
  },
  remaining: function() {
    return this.without.apply( this, this.liked() );
  }      
});
// instance of the Collection
app.restaurantsList = new app.RestaurantsList();