// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function(song) {
      this.render();
    }, this);
    this.collection.on('remove', function(song) {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.html('<div></div>');
    this.$el.find('div').append(this.collection.map( function(song) {
      return new SongQueueEntryView(song);
    }));
    return this.$el;
  }

});
