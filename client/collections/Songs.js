var Songs = Backbone.Collection.extend({
  initialize: function() {
    this.connectToServer();    
  },
  
  connectToServer: function() {
    var context = this;
    Backbone.ajax({
      url: this.url,
      method: 'GET',
      type: 'application/json',
      success: function(data) {
        context.add(data.results);
        context.trigger('sync');         
      },
      error: function(song) {
      }
    });
  },
  url: 'https://api.parse.com/1/classes/songs/',
  model: SongModel

});