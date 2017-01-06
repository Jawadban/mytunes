// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('remove', function() {
      this.render();
    }, this);
    this.render();
  },

  render: function() {
    var html = '<h1> SongQueue </h1>';
    this.$el.html(html);
    var children = this.collection.map( function(song) {
      return new SongQueueEntryView({model: song}).render();
    });
    // console.log(children);
    this.$el.find('h1').append(children);
  }

});
