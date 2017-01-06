// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function(song) {
      this.render();
    }, this);
    this.collection.on('remove', function(song) {
      this.render();
    }, this);
    return this.render();
  },

  render: function() {
    var html = '<div> </div>';
    this.$el.html(html);
    var children = this.collection.map( function(song) {
      return new SongQueueEntryView({model: song});
    });
    this.$el.find('div').append(children);
    return this.$el;
  }

});
