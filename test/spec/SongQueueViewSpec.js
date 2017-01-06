describe('SongQueueView', function() {
  var view, model, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title: 'test song 2'
      }
    ]);
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
  });

  it('dequeues clicked songs', function() {
    sinon.spy(SongModel.prototype, 'dequeue');
    view = new SongQueueEntryView({model: model});
    view.render();
  
    view.$el.children().first().click();
    expect(model.dequeue).to.have.been.called;
    SongModel.prototype.dequeue.restore();
  });

  // it('length decrements when clicked', function() {
  //   view = new SongQueueView({collection: fakeSongs});
  //   view.render();
  //   console.log(view.collection.at(0));
  //   view.collection.at(0).$el.children().first().click();
  //   expect(view.collection.length).to.equal(1);
  // });

  xit('creates SongQueueEntryViews for each queued song & renders them', function() {
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  xit('renders when add or remove event fires from the song queue collection', function() {
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title: 'test song 3'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

});
