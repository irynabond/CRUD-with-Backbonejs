app.RestaurantsView = Backbone.View.extend({
tagName: 'li',
template: _.template($('#item-template').html()),
render: function(){
  $.ajax({
      url: window.location.origin + '/getRestaurants',
      success: function (data) {console.log(data) }
    })
  this.$el.html(this.template(this.model.toJSON()));
  this.input = this.$('.edit');
  return this; // enable chained calls
},
initialize: function(){
  this.model.on('change', this.render, this);
  this.model.on('destroy', this.remove, this); // remove: Convenience Backbone's function for removing the view from the DOM.
},      
events: {
  'dblclick label' : 'edit',
  'keypress .edit' : 'updateOnEnter',
  'blur .edit' : 'close',
  'click .toggle': 'toggleLiked',
  'click .destroy': 'destroy'
},
edit: function(){
  this.$el.addClass('editing');
  this.input.focus();
},
close: function(){
  var value = this.input.val().trim();
  if(value) {
    this.model.save({title: value});
  }
  this.$el.removeClass('editing');
},
updateOnEnter: function(e){
  if(e.which == 13){
    this.close();
  }
},
toggleLiked: function(){
  this.model.toggle();
},
destroy: function(){
  this.model.destroy();
}      
});
