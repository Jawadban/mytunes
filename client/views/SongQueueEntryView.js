// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  initialize: function(song) {
    return this.render(song);
  },

  render: function(song) {
    return '<span> % song % </span>';
  }
});
