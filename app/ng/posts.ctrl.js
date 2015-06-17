angular.module('app')
  .controller('PostsCtrl', function ($scope, PostsSvc) {
    PostsSvc.fetch().success(function (posts) {
      $scope.posts = posts;
    });

    $scope.addPost = function() {
      if ($scope.postBody) {
        PostsSvc.create({
          username: '_augustinas',
          body: $scope.postBody
        }).success(function (post) {
          $scope.posts.unshift(post);
          $scope.postBody = null;
        });
      }
    };
  });
