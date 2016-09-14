var GitHub = require('/github.js');

var mod = angular.module( 'coffeetech', [])

mod.controller( 'GithubCtrl', function( $scope ) {
  var github = new GitHub({});
  var repo = github.getRepo( "gollum", "gollum" );
  repo.show(function(err, repo) {
    $scope.repo = repo;
    $scope.$apply();
  });
})
