// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  initialize: function() {
    return this.render();
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },
  events: {
    'click': function() {
      return this.model.dequeue();
    }
  }
});
