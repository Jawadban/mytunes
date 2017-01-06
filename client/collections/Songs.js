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
        console.log('GET method success');
      },
      error: function(song) {
        console.log('GET method failed');
      }
    });
  },
  url: 'https://api.parse.com/1/classes/songs/',
  model: SongModel

});