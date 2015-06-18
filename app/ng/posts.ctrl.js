angular.module('app')
  .controller('PostsCtrl', function ($scope, PostsSvc) {
    PostsSvc.fetch().then(function (posts) {
      $scope.posts = posts;
    });

    $scope.addPost = function() {
      if ($scope.postBody) {
        PostsSvc.create({
          username: '_augustinas',
          body: $scope.postBody
        }).then(function (post) {
          $scope.posts.unshift(post);
          $scope.postBody = null;
        });
      }
    };
  });
