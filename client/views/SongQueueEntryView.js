// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  initialize: function() {
    return this.render(this.model);
  },

  render: function(song) {
    var html = `<span> ${song} </span>`;
    this.$el.html(html);
    return this.$el;
  },
  events: {
    'click': function() {
      this.model.dequeue();
    }
  }
});
