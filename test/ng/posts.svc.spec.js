describe('Posts service', function () {
  beforeEach(module('app'));
  var PostsSvc, $httpBackend;

  beforeEach(inject(function (_PostsSvc_, _$httpBackend_) {
    PostsSvc = _PostsSvc_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    $httpBackend.flush();
  });

  describe('#fetch', function () {
    beforeEach(function () {
      $httpBackend.expect('GET', '/api/posts')
        .respond([
          {username: '_augustinas', body: 'first post'},
          {username: 'bagustinas', body: 'second post'}
        ]);
    });

    it('gets 2 posts', function () {
      PostsSvc.fetch().success(function (posts) {
        expect(posts).to.have.length(2);
      });
    });
  });
});